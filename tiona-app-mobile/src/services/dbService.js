// src/services/dbService.js
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';

const sqlite = new SQLiteConnection(CapacitorSQLite);
let db = null;
let isInitialized = false;

// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

export async function initializeDatabase() {
  if (isInitialized) return;

  const platform = Capacitor.getPlatform();

  if (platform === 'web') {
    await jeepSqlite(window);

    const jeepEl = document.querySelector('jeep-sqlite');
    if (!jeepEl) {
      throw new Error('<jeep-sqlite> element missing from index.html');
    }

    await customElements.whenDefined('jeep-sqlite');
    await sqlite.initWebStore();
  }

  isInitialized = true;
}

export async function setupDatabase() {
  if (!isInitialized) throw new Error('Call initializeDatabase() first');

  try {
    const ret = await sqlite.checkConnectionsConsistency();
    const isConn = (await sqlite.isConnection('tiona', false)).result;

    if (ret.result && isConn) {
      db = await sqlite.retrieveConnection('tiona', false);
    } else {
      db = await sqlite.createConnection('tiona', false, 'no-encryption', 1, false);
    }

    await db.open();
    await createTables();

    console.log('✅ Database ready');
    return db;
  } catch (err) {
    console.error('❌ setupDatabase error:', err);
    throw err;
  }
}

async function createTables() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS songs (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      category  TEXT    NOT NULL,
      title     TEXT    NOT NULL,
      key       TEXT,
      author    TEXT,
      measures  TEXT,
      content   TEXT
    );
  `);
}

export function getDb() {
  if (!db) throw new Error('DB not ready. Call setupDatabase() first.');
  return db;
}

// ─────────────────────────────────────────────
// QUERIES  ← these were missing!
// ─────────────────────────────────────────────

export async function getSongsByCategory(category) {
  const database = getDb();
  const result = await database.query(
    'SELECT * FROM songs WHERE category = ? ORDER BY id ASC',
    [category]
  );

  // Parse JSON fields that were stored as strings
  return (result.values ?? []).map(parseSong);
}

export async function getSongById(id) {
  const database = getDb();
  const result = await database.query(
    'SELECT * FROM songs WHERE id = ?',
    [id]
  );

  const song = result.values?.[0];
  return song ? parseSong(song) : null;
}

export async function getAllSongs() {
  const database = getDb();
  const result = await database.query(
    'SELECT * FROM songs ORDER BY category, id ASC'
  );
  return (result.values ?? []).map(parseSong);
}

export async function searchAllSongs(keyword) {
  const database = getDb();
  const result = await database.query(
    'SELECT * FROM songs WHERE title LIKE ? ORDER BY title ASC',
    [`%${keyword}%`]
  );
  return (result.values ?? []).map(parseSong);
}

// ─────────────────────────────────────────────
// INSERT (for seeding legacy data into DB)
// ─────────────────────────────────────────────

export async function insertSong({ category, title, key, author, measures, content }) {
  const database = getDb();
  await database.run(
    `INSERT INTO songs (category, title, key, author, measures, content)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      category,
      title,
      key ?? null,
      author ?? null,
      measures ? JSON.stringify(measures) : null,   // store as JSON string
      content  ? JSON.stringify(content)  : null,
    ]
  );
}

// ─────────────────────────────────────────────
// HELPER
// ─────────────────────────────────────────────

// SQLite stores everything as text — parse JSON fields back to objects
function parseSong(row) {
  return {
    ...row,
    measures: safeParseJSON(row.measures, []),
    content:  safeParseJSON(row.content,  []),
  };
}

function safeParseJSON(value, fallback) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}