// Ejercicio 2: Añadir un nuevo participante con un puntaje inicial

function agregarParticipante(tablero, nombre, puntos) {
  tablero[nombre] = puntos;
  return tablero;
}
