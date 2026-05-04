const haa = [
  {
    "id": "1",
    "title": "Ambony lanao",
    "key": "Do dia F",
    "author": "Pete Sanchez",
    "measures": [
    {
      "indication": " ",
      "S": "   : -.s,| d : m ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "  ---  Am- bo- nyIa-" 
    },
    {
      "indication": " ",
      "S": " f : - | - : m ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "nao --------   ry" 
    },
    {
      "indication": " ",
      "S": " r : -.s, | t,.d : -.r ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "Tompo - Ambonin' -ny" 
    },
    {
      "indication": " ",
      "S": " m : - | m : r ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "ta -- ny re" 
    },
    {
      "indication": " ",
      "S": " d : - | d.r : -.m ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "hetra -- Ambo - nin'" 
    },
    {
      "indication": " ",
      "S": " f : f | f : f.m ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "ny An- ndria - ma - ni" 
    },
    {
      "indication": " ----- 1 ------- ",
      "S": " r : - | d : l, ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "tra -- re -- --" 
    },
    {
      "indication": " --------------------- ",
      "S": " s : - | - : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "he -- -- -- --" 
    },
    {
      "indication": " ",
      "S": " s : .s,| d : m ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "tra Am no nyHia" 
    },
    {
      "indication": " ",
      "S": " r : - | - : d ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "tra -- -- -- re" 
    },
    {
      "indication": " ",
      "S": " d : - | - : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "he -- -- -- " 
    },
    {
      "indication": " ",
      "S": " d : - | s : s ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "tra -- A sa " 
    },
    {
      "indication": " ",
      "S": " s, : -.s | s : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "dra -- troIa- nao" 
    },
    {
      "indication": " ",
      "S": " - : - | s : s ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "-- -- A- san" 
    },
    {
      "indication": " ",
      "S": " s : -.s | s : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "dra troIa - nao" 
    },
    {
      "indication": " ",
      "S": " - : - | s : s ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "-- -- A- nao" 
    },
    {
      "indication": " ",
      "S": " s : -.f | f : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "dra troIa - nao" 
    },
    {
      "indication": " ",
      "S": " - : - | m : s ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "-- -- Tom -po" 
    },
    {
      "indication": " --------- 1 -------",
      "S": " s : - | - : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "ô -- -- --" 
    },
    {
      "indication": " ",
      "S": " - : - | s : s ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "-- -- A- san" 
    },
    {
      "indication": " ------ 2 ------ ",
      "S": " m.r.d : - | - : - ",
      "A": "",
      "T": "",
      "B": "",
      "lyrics": "ô -- -- --" 
    },

  ],
    // "content": [
    //   "", 
    // ]
  },
];

import { searchSongs } from './searchUtils';

export function fetchHaa() {
    return haa; 
}

export function fetchHaaById(id) {
    return haa.find(song => song.id === id);
}

export function searchHaa(query) {
    return searchSongs(haa, query);
}