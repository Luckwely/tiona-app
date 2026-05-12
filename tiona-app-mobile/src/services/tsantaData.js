import { getSongsByCategory, getSongById } from './dbService';
import { searchSongs } from './searchUtils';
import { tsantaLegacy } from './seeds/tsantaSeed';

export async function fetchTsanta() {
  try {
    const tsanta = await getSongsByCategory('tsanta');
    return tsanta || [];
  } catch (error) {
    console.error('Error fetching TSANTA songs:', error);
    return tsantaLegacy;
  }
}

export function searchTsanta(query, songs = []) {
  return searchSongs(query, songs);
}

export async function fetchTsantaById(id) {
  try {
    return await getSongById(id);
  } catch (error) {
    console.error(`Error fetching TSANTA song ${id}:`, error);
    return tsantaLegacy.find(song => song.id === id);
  }
}