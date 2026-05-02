const tsanta = [
  {
    "id": "1",
    "title": "TSANTA",
    "measures": [
    {
      "indication": " ",
      "S": "d .d :m.m",
      "A": "s,.s,:d.d",
      "T": "m .m :s.s",
      "B": "d .d :d.d",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": " r : d ",
      "A": " t,: s,",
      "T": " f : m ",
      "B": " s,: d ",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "d'.d:s.m",
      "A": "m .m:d.d",
      "T": "s .s:m.s",
      "B": "d .d:m.d",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": " l : s ",
      "A": "d.r: m ",
      "T": "l.t: d'",
      "B": " f : d ",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "s.s:f.m",
      "A": "m.m:r.d",
      "T": "m.m:f.s",
      "B": "d.d:r.m",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "l.l:s .s",
      "A": "d.r:m .m",
      "T": "l.t:d'.m",
      "B": "f.f:d .d",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "f.m:r .d ",
      "A": "r.d:l,.l,",
      "T": "f.s:l .l ",
      "B": "r.m:f .fi",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "t, :  - ",
      "A": "s, :  - ",
      "T": "s  :  - ",
      "B": "r.m:f.fi",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "m.m:r .r ",
      "A": "d.d:t,.t,",
      "T": "s.s:f .f ",
      "B": "d.d:s,.s,",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": " d : d ",
      "A": " l,: l,",
      "T": " m : m ",
      "B": " l,: l,",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "d'.d': s.m",
      "A": "m .m : d.d",
      "T": "m .m : s.s",
      "B": "d .d : m.d",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "l  : s ",
      "A": "d.r: m ",
      "T": "l.t: d ",
      "B": "f  : d ",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "d . r : m ",
      "A": "s,.t, : d ",
      "T": "s . f : m ",
      "B": "m . r : d ",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": " f : m ",
      "A": " r : d ",
      "T": " r : m ",
      "B": " t,: d ",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "m . r:d . t",
      "A": "d .l,:s,.f,",
      "T": "s . f:m . r",
      "B": "m,.f,:s,.s,",
      "lyrics": "" 
    },
    {
      "indication": " ",
      "S": "d : -",
      "A": "m, : -",
      "T": "d : -",
      "B": "d, : -",
      "lyrics": "" 
    },
  ],
    "content": [
      "Andriananahary masina indrindra!  \n Na tsy hita aza izao ny voninahitrao! \n Masina indrindra Hianao irery, \n Andriananahary, Telo I zay Iray", 
      "Zava-manana aina samy mankalaza \n Sady manamabara Anao I zay Tompony izao \n Hianao irery no mitahy azy \n Andria nanahary, Telo I zay Iray", 
      "Andria nanahary feno hatsarana \n He, ny fitahianao izay mpanomponao   \n Tsara dia tsara ny omenao azy, \n Andria nanahary, Telo I zay Iray", 
      "Andria nanahary masina indrindra! \n Izahay mpanomponao ta-hankalaza Anao \n Feno fahendrena, feno fiantrana \n Andria nanahary, Telo I zay Iray", 
    ]
  },
];

import { searchSongs } from './searchUtils';

export function fetchTsanta() {
    return tsanta; 
}

export function fetchTsantaById(id) {
    return tsanta.find(song => song.id === id);
}

export function searchTsanta(query) {
    return searchSongs(tsanta, query);
}