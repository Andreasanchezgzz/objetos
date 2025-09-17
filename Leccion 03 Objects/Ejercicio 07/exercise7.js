// Ejercicio 7: Encontrar al participante con el mayor puntaje

function encontrarMayorPuntaje(tablero) {
  let maxNombre = "";
  let maxPuntos = -Infinity; 

  for (let participante in tablero) {
    if (tablero[participante] > maxPuntos) {
      maxPuntos = tablero[participante];
      maxNombre = participante;
    }
  }

  return maxNombre;
}
