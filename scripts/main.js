import { series } from './data.js';

// Referencias a elementos del DOM
const tablaContenido = document.getElementById("contenido-series");
const contenedorPromedio = document.getElementById("promedio-temporadas");

// Inicialización
inicializarTabla(series);
calcularPromedioTemporadas(series);

/**
 * Genera filas de la tabla con los datos de series
 */
function inicializarTabla(datosSeries) {
    // Limpiamos el contenido previo si existe
    tablaContenido.innerHTML = '';
    
    // Iteración por cada elemento del array
    for (let i = 0; i < datosSeries.length; i++) {
        // Crear elemento de fila
        const fila = document.createElement("tr");
        
        // Definir contenido HTML - IMPORTANTE: usar backticks (`) no comillas normales
        fila.innerHTML = `
            <td>${datosSeries[i].id}</td>
            <td><a href="${datosSeries[i].link}" target="_blank">${datosSeries[i].name}</a></td>
            <td>${datosSeries[i].channel}</td>
            <td>${datosSeries[i].seasons}</td>
        `;
        
        // Añadir al contenedor
        tablaContenido.appendChild(fila);
    }
}

/**
 * Calcula y muestra el promedio de temporadas
 */
function calcularPromedioTemporadas(datosSeries) {
    // Inicializar contador
    let sumatoriaTemporadas = 0;
    
    // Sumar todas las temporadas
    for (let i = 0; i < datosSeries.length; i++) {
        sumatoriaTemporadas += datosSeries[i].seasons;
    }
    
    // Calcular promedio
    const promedio = sumatoriaTemporadas / datosSeries.length;
    
    // Mostrar resultado - IMPORTANTE: usar backticks (`) no comillas normales
    contenedorPromedio.innerText = `Promedio de temporadas: ${promedio.toFixed(2)}`;
}

// Registro de ejecución
console.log("Visualización de series completada");