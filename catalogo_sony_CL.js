/**
 * Clase Base ProductoSony
 */
class ProductoSony {
    constructor(nombre, modelo, precio, categoria) {
        this.nombre = nombre;
        this.modelo = modelo;
        this.precio = precio;
        this.categoria = categoria;
    }

    mostrarInformacion() {
        return `Producto: ${this.nombre} | Modelo: ${this.modelo} | Precio: $${this.precio.toLocaleString('es-CL')} | Categoría: ${this.categoria}`;
    }
}

/**
 * Especialización: Televisores
 */
class Televisor extends ProductoSony {
    constructor(nombre, modelo, precio, pulgadas, tecnologia) {
        super(nombre, modelo, precio, 'Televisores');
        this.pulgadas = pulgadas;
        this.tecnologia = tecnologia;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()} | Pantalla: ${this.pulgadas}" ${this.tecnologia}`;
    }
}

/**
 * Especialización: Cámaras
 */
class Camara extends ProductoSony {
    constructor(nombre, modelo, precio, sensor, megapixeles) {
        super(nombre, modelo, precio, 'Fotografía');
        this.sensor = sensor;
        this.megapixeles = megapixeles;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()} | Sensor: ${this.sensor} | MP: ${this.megapixeles}`;
    }
}

/**
 * Especialización: Audio
 */
class Audio extends ProductoSony {
    constructor(nombre, modelo, precio, tipoAudio, cancelacionRuido = false) {
        super(nombre, modelo, precio, 'Audio');
        this.tipoAudio = tipoAudio;
        this.cancelacionRuido = cancelacionRuido;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()} | Tipo: ${this.tipoAudio} | ANC: ${this.cancelacionRuido ? 'Sí' : 'No'}`;
    }
}

/**
 * Especialización: Consolas
 */
class Consola extends ProductoSony {
    constructor(nombre, modelo, precio, almacenamiento, edicion) {
        super(nombre, modelo, precio, 'PlayStation');
        this.almacenamiento = almacenamiento;
        this.edicion = edicion;
    }

    mostrarInformacion() {
        return `${super.mostrarInformacion()} | Almacenamiento: ${this.almacenamiento} | Edición: ${this.edicion}`;
    }
}

// --- EJEMPLOS DE USO ---
console.log('--- CATALOGO SONY CHILE ---');

const tv = new Televisor('Sony BRAVIA XR', 'A80L', 1599990, 65, 'OLED');
const camara = new Camara('Alpha 7 IV', 'ILCE-7M4', 2199990, 'Full-frame', '33MP');
const audifonos = new Audio('WH-1000XM5', 'WH1000XM5/B', 329990, 'Over-ear', true);
const ps5 = new Consola('PlayStation 5', 'CFI-1215A', 549990, '825GB', 'Standard');

console.log(tv.mostrarInformacion());
console.log(camara.mostrarInformacion());
console.log(audifonos.mostrarInformacion());
console.log(ps5.mostrarInformacion());
