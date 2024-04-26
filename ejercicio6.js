const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index_1, index_2) {
    //Recordando que en la última clase se mencionó que los arrays son objetos 
    //con índices asignados como claves, he pensado en asignar directamente y guardarlo antes en 
    //una variable.
    const savedArr = array[index_1];
    array[index_1] = array[index_2];
    array[index_2] = savedArr;
}

swap(fantasticFour, 2, 3);
console.log(fantasticFour)