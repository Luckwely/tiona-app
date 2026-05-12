export function searchSongs(query, songs = []) {
    if (typeof query !== 'string' || !query.trim()) {
        return songs;
    }

    const searchTerm = query.toLowerCase();

    return songs.filter((song) => {
        const title = song.title?.toLowerCase() ?? '';
        const id = song.id?.toString().toLowerCase() ?? '';
        return title.includes(searchTerm) || id.includes(searchTerm);
    });
}
