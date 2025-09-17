// Ejercicio 5: Multiplicar los puntos de un participante

function multiplicarPuntaje(tablero, nombre, factor) {
  tablero[nombre] = tablero[nombre] * factor;
  return tablero;
}

