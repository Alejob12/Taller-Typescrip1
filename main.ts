import { Serie } from './Serie.js';
import { series } from './data.js';

// Interfaces
interface EstadisticasCalculador {
  calcularPromedio(coleccion: Serie[]): number;
}

// Clases
class VisualizadorTabla {
  private elementoTabla: HTMLElement;
  private elementoPromedio: HTMLElement;
  private calculador: EstadisticasCalculador;

  constructor(idTabla: string, idPromedio: string, calculador: EstadisticasCalculador) {
    this.elementoTabla = document.getElementById(idTabla)!;
    this.elementoPromedio = document.getElementById(idPromedio)!;
    this.calculador = calculador;
  }

  public cargarDatos(listaSeries: Serie[]): void {
    this.generarFilasTabla(listaSeries);
    this.actualizarPromedio(listaSeries);
  }

  private generarFilasTabla(listaSeries: Serie[]): void {
    listaSeries.forEach(serie => {
      const elementoFila = document.createElement("tr");
      
      elementoFila.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      
      this.elementoTabla.appendChild(elementoFila);
    });
  }

  private actualizarPromedio(listaSeries: Serie[]): void {
    const valorPromedio = this.calculador.calcularPromedio(listaSeries);
    this.elementoPromedio.innerText = `Promedio de temporadas: ${valorPromedio.toFixed(2)}`;
  }
}

// Implementación del calculador
class CalculadorTemporadas implements EstadisticasCalculador {
  public calcularPromedio(coleccion: Serie[]): number {
    const totalTemporadas = coleccion.reduce((suma, item) => suma + item.seasons, 0);
    return coleccion.length > 0 ? totalTemporadas / coleccion.length : 0;
  }
}

// Inicialización
const calculador = new CalculadorTemporadas();
const visualizador = new VisualizadorTabla("series-table-body", "average-seasons", calculador);

// Cargar y mostrar datos
visualizador.cargarDatos(series);

console.log("main.ts ejecutado correctamente");