/*
   CÓDIGO ORIGINAL (COMENTADO PARA EVITAR CONFLICTOS DE NOMBRES)
class Taxi{
    constructor (licencia, tipoAuto) {
        this.licencia = licencia;
        this.tipoAuto = tipoAuto;
    }
}
class TaxiTradicional extends Taxi {
    constructor (licencia, tipoAuto) {
        super(licencia, tipoAuto);
    }
}

class TaxiParticular extends Taxi {
    constructor (licencia, tipoAuto) {
        super(licencia, tipoAuto);
    }
}

class TaxiExpress extends TaxiParticular {
    constructor (licencia, tipoAuto, modelo) {
        super(licencia, tipoAuto, modelo);
    }
}

class TaxiPremium extends TaxiParticular {
    constructor (licencia, tipoAuto, modelo) {
        super(licencia, tipoAuto, modelo);
    }
}
class TaxiCargo extends Taxi {
    constructor (licencia, tipoAuto, tipoTransporte) {
        super(licencia, tipoAuto, tipoTransporte);
    }
}

// Ejemplos de instancias
const taxi1 = new TaxiTradicional('A1', 'TechoAmarillo');
const taxi2 = new TaxiExpress('B', 'Particular', 'gama media');
const taxi3 = new TaxiPremium('B', 'Luxury Sedan', 'gama alta');
const taxi4 = new TaxiCargo('JKL012', 'Van', 'Carga');
*/


// ============================================================
//            SOLUCIÓN FINAL (EXPLICADA POR LÍNEA)
// ============================================================

/**
 * Clase Base: Taxi
 * Representa la raíz de la jerarquía para todos los tipos de transporte.
 */
class Taxi {
    constructor(tipo) {
        this.tipo = tipo; // Almacena la categoría general del vehículo
    }
}

/**
 * REQUERIMIENTO: Taxi tradicional (Auto con techo amarillo y licencia A1).
 */
class TaxiTradicional extends Taxi {
    constructor() {
        super('Tradicional');      // Llama a la clase padre definiendo el tipo
        this.techo = 'Amarillo';    // Cumple el requisito: Techo amarillo
        this.licencia = 'A1';       // Cumple el requisito: Licencia A1
    }
}

/**
 * REQUERIMIENTO: Taxi particular (Conductor clase B).
 * Esta clase sirve como base para los tipos Express y Premium.
 */
class TaxiParticular extends Taxi {
    constructor(claseParticular) {
        super('Particular');       // Define la categoría base como Particular
        this.licencia = 'Clase B';  // Cumple el requisito: Licencia Clase B para todos los particulares
        this.categoria = claseParticular; // Almacena si es Express o Premium
    }
}

/**
 * REQUERIMIENTO: Taxi Express (Subtipo de particular, autos típicos).
 */
class TaxiExpress extends TaxiParticular {
    constructor() {
        // Hereda la licencia Clase B de TaxiParticular y se define como auto típico
        super('Taxi Express (Auto típico)');
    }
}

/**
 * REQUERIMIENTO: Taxi Premium (Subtipo de particular, mayor categoría).
 */
class TaxiPremium extends TaxiParticular {
    constructor() {
        // Hereda la licencia Clase B de TaxiParticular y se define como mayor categoría
        super('Taxi Premium (Mayor categoría)');
    }
}

/**
 * REQUERIMIENTO: Taxi cargo (Destinado a transportar carga en lugar de personas).
 */
class TaxiCargo extends Taxi {
    constructor() {
        super('Taxi Cargo');        // Define su tipo como Cargo
        this.proposito = 'Transportar carga'; // Cumple el requisito: Foco en carga, no personas
    }
}

// --- EJEMPLOS DE INSTANCIAS ---

const tradicional = new TaxiTradicional();
const express = new TaxiExpress();
const premium = new TaxiPremium();
const cargo = new TaxiCargo();

console.log('--- Resumen Final Explicado ---');
console.log(tradicional);
console.log(express);
console.log(premium);
console.log(cargo);
