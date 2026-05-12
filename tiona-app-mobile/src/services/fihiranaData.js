import { getSongsByCategory, getSongById } from './dbService';
import { searchSongs } from './searchUtils';
import { fihiranaLegacy } from './seeds/fihiranaSeed';

export async function fetchFihirana() {
  try {
    const fihirana = await getSongsByCategory('fihirana');
    return fihirana || [];
  } catch (error) {
    console.error('Error fetching FIHIRANA songs:', error);
    return fihiranaLegacy;
  }
}

export function searchFihirana(query, songs = []) {
  return searchSongs(query, songs);
}

export async function fetchFihiranaById(id) {
  try {
    return await getSongById(id);
  } catch (error) {
    console.error(`Error fetching FIHIRANA song ${id}:`, error);
    return fihiranaLegacy.find(song => song.id === id);
  }
}