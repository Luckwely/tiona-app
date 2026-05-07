CREATE TABLE songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    song_number INTEGER NOT NULL,
    title TEXT NOT NULL,
    author TEXT,
    lyrics_full TEXT,
    category TEXT
);

CREATE TABLE song_versions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    song_id INTEGER,
    version_name TEXT,
    musical_key TEXT,
    solfa_content TEXT,
    special_indicators TEXT,
    inline_lyrics TEXT,
    FOREIGN KEY (song_id) REFERENCES songs(id)
);