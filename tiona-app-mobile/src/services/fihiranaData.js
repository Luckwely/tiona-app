const fihirana = [
  {
    "id": "01",
    "title": "FIHIRANA",
    "measures": [
    {
      "S": "  s  :  d' !  -  :  d' ",
      "A": "  m  :  s  !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "df" 
    },
    {
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "df"
    },
    {
      "S": "  s  :  d' !  -  :  d' ",
      "A": "  m  :  s  !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "df" 
    },
    {
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "df"
    },
    {
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "df"
    },
  ],
    "content": [
      "dfdfgfgdfgdfddgfdfgfdgfd \n fdgdffghgfhgffggdf \n dfghgfgfdgfd", 
      "dfdfd \n fdgdffghfghgfh \n dgffghfghdgfd", 
      "dffghdfd \n fdgdfgdf \n dgfghgfgfdgfd", 
      "dfdfd \n fdgdfgdf \n dgfdgfd", 
      "dfdfd \n fdgdfgdf \n dgfdgfd", 
    ]
  },
];

export function fetchFihirana() {
    return fihirana; 
}

export function fetchFihiranaById(id) {
    return fihirana.find(song => song.id === id);
}