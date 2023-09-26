interface iElectronic {

    obtenerMarca (marca : string) : string ;
    obtenerModelo () : string;
    obtenerAño() : number;

}

/*class Electronic implements iElectronic {

    private marca : string;
    private modelo : string;
    private año : number;

    constructor (marca : string, modelo : string, año : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año; 
    }

    obtenerMarca(): string {
        return this.marca;
    }

    obtenerAño(): number {
        return this.año;
    }

    obtenerModelo(): string {
        return this.modelo;
    }

}
*/

class Telefono implements iElectronic {

    private marca : string;
    private modelo : string;
    private año : number; 

    constructor (marca : string , modelo : string , año : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerMarca () : string {
        return this.marca
    };
    obtenerModelo () : string {
        return this.modelo
    };
    obtenerAño() : number {
        return this.año
    };

    hacerLlamadas (numero : string) : void {
        console.log ("llamando a " , numero , "...")
    }

}

class Televisor implements iElectronic {

    private marca : string;
    private modelo : string;
    private año : number; 
    private canal : number;

    constructor (marca : string , modelo : string , año : number, canal : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.canal = canal;
    }
    
    obtenerMarca () : string {
        return this.marca
    };
    obtenerModelo () : string {
        return this.modelo
    };
    obtenerAño() : number {
        return this.año
    };

    cambiarCanal (canal : number) : void {
        this.canal = canal; 
    }

    getChannel (canal : number) : number {
        return this.canal;
    }

}

let iphone : Telefono = new Telefono ("iphone" , "el ultimo" , 2024);
console.log(iphone);
let samsung : Televisor = new Televisor ("samsung" , "serie 7" , 2021, 20);
samsung.cambiarCanal(24);
console.log (samsung);
