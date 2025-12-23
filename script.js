class Taxi {
    constructor(tipo) {
        this.tipo = tipo;
    }
}

class TaxiTradicional extends Taxi {
    constructor() {
        super('Tradicional');
        this.techo = 'Amarillo';
        this.licencia = 'A1';
    }
}

class TaxiParticular extends Taxi {
    constructor(claseParticular) {
        super('Particular');
        this.licencia = 'Clase B';
        this.categoria = claseParticular;
    }
}

class TaxiExpress extends TaxiParticular {
    constructor() {
        super('Taxi Express (Auto típico)');
    }
}

class TaxiPremium extends TaxiParticular {
    constructor() {
        super('Taxi Premium (Mayor categoría)');
    }
}

class TaxiCargo extends Taxi {
    constructor() {
        super('Taxi Cargo');
        this.proposito = 'Transportar carga';
    }
}

const tradicional = new TaxiTradicional();
const express = new TaxiExpress();
const premium = new TaxiPremium();
const cargo = new TaxiCargo();

console.log(tradicional);
console.log(express);
console.log(premium);
console.log(cargo);
