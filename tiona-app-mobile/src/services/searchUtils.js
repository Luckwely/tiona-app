export function searchSongs(songs, query) {
    if (!query || !query.trim()) {
        return songs;
    }

    const searchTerm = query.toLowerCase();

    return songs.filter((song) => {
        const title = song.title?.toLowerCase() ?? '';
        const id = song.id?.toString().toLowerCase() ?? '';
        return title.includes(searchTerm) || id.includes(searchTerm);
    });
}
