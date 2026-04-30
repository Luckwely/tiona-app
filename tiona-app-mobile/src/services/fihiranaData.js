const fihirana = [
  {
    "id": "01",
    "title": "Ny Fanahiko",
    "key": "F",
    "time_signature": "4/4",
    "soprano": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "ato": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "tenor": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "content": ["Inot no havalko...", "Ny fo sy ny aiko..."]
  },
  {
    "id": "02",
    "title": "Ny Fanahiko 2",
    "key": "G",
    "time_signature": "4/4",
    "soprano": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "ato": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "tenor": ["|d:d!d:d|r:r!r:|", "|m:m!r:d|d:-!-:|"],
    "content": ["Inot no havalko...", "Ny fo sy ny aiko..."]
  }
];

export function fetchFihirana() {
    return fihirana; 
}

export function fetchFihiranaById(id) {
    return fihirana.find(song => song.id === id);
}