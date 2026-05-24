export function searchSongs(query, songs = []) {
    if (typeof query !== 'string' || !query.trim()) {
        return songs;
    }

    const searchTerm = query.toLowerCase().trim();

    return songs.filter((song) => {
        const title = song.title?.toLowerCase() ?? '';
        const id = song.id?.toString() ?? '';
        const number = song.number?.toString() ?? ''; // Ajout de la recherche par numéro
        
        return title.includes(searchTerm) || 
               id === searchTerm || 
               number === searchTerm;
    });
}