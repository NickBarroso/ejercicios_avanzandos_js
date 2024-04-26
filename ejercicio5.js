function rollDice(faces) {
  return Math.round(Math.random() * 6);
}

console.log(rollDice(6));

//! Nota: Este he hecho un poco de trampas porque ya lo conocía
//! Hice una adaptación que hice en clase más o menos

// function rollDice(faces) {
//     const tiempoActual = new Date().getTime();
//     console.log(tiempoActual);
//     const result = tiempoActual % faces+1;
//     if (result === 0) {
//       return 1;
//     }
//     return result;
//   }
