/**
 * Clase Sumatoria
 */
class Sumatoria {
    constructor(numeroBase) {
        this.base = numeroBase;
        this.acumulado = 0;
        this.conteo = 0;

        // La primera línea de salida generada por el constructor
        this.imprimir(`[Constructor] Objeto inicializado con número base: ${this.base}`);
    }

    sumar() {
        this.conteo++;
        this.acumulado += this.base * this.conteo;

        const mensaje = `[Ejecución ${this.conteo}] Sumatoria acumulada: ${this.acumulado}`;
        this.imprimir(mensaje);
        return mensaje;
    }

    imprimir(mensaje) {
        console.log(mensaje);
    }
}

// Inicialización del objeto con número base aleatorio entre 1 y 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
const instanciaSumatoria = new Sumatoria(numeroAleatorio);

// Ejecución automática para demostración en consola
console.log('--- EJECUCIÓN SUMATORIA ---');
instanciaSumatoria.sumar();
instanciaSumatoria.sumar();
instanciaSumatoria.sumar();
