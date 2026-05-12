// src/services/seedDatabase.js
import { insertSong, getSongsByCategory } from './dbService';
import { haaLegacy } from './seeds/haaSeed';
import { fihiranaLegacy } from './seeds/fihiranaSeed';
import { tsantaLegacy } from './seeds/tsantaSeed';

export async function seedIfEmpty() {
  // Only seed if the table is empty
  const existing = await getSongsByCategory('haa');
  if (existing.length > 0) {
    console.log('✅ Database already seeded, skipping.');
    return;
  }

  console.log('🌱 Seeding database with legacy data...');

  for (const song of haaLegacy) {
    await insertSong({ category: 'haa', ...song });
  }
  for (const song of fihiranaLegacy) {
    await insertSong({ category: 'fihirana', ...song });
  }
  for (const song of tsantaLegacy) {
    await insertSong({ category: 'tsanta', ...song });
  }

  console.log('✅ Seeding complete.');
}