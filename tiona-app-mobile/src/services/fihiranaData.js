const fihirana = [
  {
    "id": "1",
    "title": "FIHIRANA",
    "measures": [
    {
      "indication": "",
      "S": "  s  :  d' !  -  :  d' ",
      "A": "  m  :  s  !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "dsdsdfsdfsdfsdsdf" 
    },
    {
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "dsfsdfsdfsdfsdsdfsdf"
    },
    {
      "S": "  s  :  d' !  -  :  d' ",
      "A": "  m  :  s  !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "dfssdfsdfsdfsddfsddsf" 
    },
    {
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "dsdfsdfsdfsdfdssdfsdf"
    },
    {
      "indication": "DC",
      "S": " s.s :  d' !  -  :  d' ",
      "A": "  m  :     !  -  :  s  ",
      "T": "  d  :  m  !  -  :  m  ",
      "B": "  d  :  d  !  -  :  d  ",
      "lyrics": "dsdfsdfsdfsdfsdfdfsdf"
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