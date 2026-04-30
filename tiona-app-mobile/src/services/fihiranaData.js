const fihirana = [
  {
    "id": "01",
    "title": "Ny Fanahiko",
    "measures": [
    {
      "s": "| s : d'! - : d'|",
      "a": "| m : s ! - : s |",
      "t": "| d : m ! - : m |",
      "b": "| d : d ! - : d |",
      "lyrics": "To- mpo- za- ny" // Fragment for this measure
    },
    {
      "s": "| s : d'! - : d'|",
      "a": "| m : s ! - : s |",
      "t": "| d : m ! - : m |",
      "b": "| d : d ! - : d |",
      "lyrics": "mba je- re- o"
    }
  ],
    "content": ["Inot no havalko...", "Ny fo sy ny aiko..."]
  }
];

export function fetchFihirana() {
    return fihirana; 
}

export function fetchFihiranaById(id) {
    return fihirana.find(song => song.id === id);
}