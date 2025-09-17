// Ejercicio 8: Calcular el puntaje total de todos los participantes

function calcularPuntajeTotal(tablero) {
    let total = 0; 

  
    for (let participante in tablero) {
        total += tablero[participante]; 
    }

    return total; 
}
