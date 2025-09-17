// Ejercicio 3: Remover a un participante del tablero

function removerParticipante(tablero, nombre) {
  // Usamos delete para eliminar la propiedad con la clave "nombre"
  delete tablero[nombre];
  return tablero;
}

