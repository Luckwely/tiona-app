/**
 * Service pour gérer les chants via le fichier JSON statique
 */

// Cache pour éviter de re-télécharger le JSON à chaque changement de page
let cachedData = null;

async function loadJsonData() {
    if (cachedData) return cachedData;
    
    try {
        const response = await fetch('/data/fihirana.json');
        if (!response.ok) {
            throw new Error(`Impossible de charger le fichier JSON : ${response.status}`);
        }
        cachedData = await response.json();
        return cachedData;
    } catch (error) {
        console.error("Erreur lors de la récupération des chants :", error);
        return null;
    }
}

/**
 * Récupère les chants d'une catégorie spécifique (ex: 'tsanta', 'haa')
 */
export const getSongsByCategory = async (category) => {
    const data = await loadJsonData();
    if (!data) return [];
    
    // Retourne la catégorie demandée en minuscules, ou un tableau vide si elle n'existe pas
    return data[category.toLowerCase()] || [];
};

/**
 * Cherche un chant spécifique par son ID toutes catégories confondues
 */
export const getSongById = async (id) => {
    const data = await loadJsonData();
    if (!data) return null;
    
    for (const category in data) {
        const song = data[category].find(s => s.id === parseInt(id));
        if (song) return song;
    }
    return null;
};