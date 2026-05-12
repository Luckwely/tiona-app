import { getSongsByCategory, getSongById } from './dbService';
import { searchSongs } from './searchUtils';
export { haaLegacy } from './seeds/haaSeed'; // re-export for seedDatabase.js

import { haaLegacy } from './seeds/haaSeed'; // use in fallback

export async function fetchHaa() {
  try {
    const haa = await getSongsByCategory('haa');
    return haa || [];
  } catch (error) {
    console.error('Error fetching HAA songs:', error);
    return haaLegacy;
  }
}

export function searchHaa(query, songs = []) {
  return searchSongs(query, songs);
}

export async function fetchHaaById(id) {
  try {
    return await getSongById(id);
  } catch (error) {
    console.error(`Error fetching HAA song ${id}:`, error);
    return haaLegacy.find(song => song.id === id);
  }
}