abstract class Vehiculo {

    private marca : string;
    private modelo : string;
    private año : number;
    private estaPrendido : boolean;
    protected velocidadActual : number;

    public constructor (marca : string , modelo : string , año : number , estaPrendido : boolean , velocidadActual : number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.estaPrendido = estaPrendido;
        this.velocidadActual = velocidadActual;
    }

    prender () : void {}
    apagar () : void {}
    abstract acelerar () : void;
    abstract frenar () : void;
    obtenerInfo () : void {
        console.log ("marca: " , this.marca , "\nmodelo: " , this.modelo , "\naño: " , this.año , "\nestaPrendido: " , this.estaPrendido , "\nvelocidad actual: " , this.velocidadActual); 
    }

}

export class AutoDeportivo extends Vehiculo {

    accesoriosDeportivos : string [];

    constructor (marca : string , modelo : string , año : number , estaPrendido : boolean , velocidadActual : number ,accesoriosDeportivos : string[]) {
        super(marca  , modelo  , año  , estaPrendido , velocidadActual);
        this.accesoriosDeportivos = accesoriosDeportivos; 
    }
    
    acelerar(): void {
        this.velocidadActual += 50;
    }

    frenar(): void {
        this.velocidadActual -= 50;
    }
    
        
    
}

export class AutoCiudad extends Vehiculo {

    acelerar(): void {
        this.velocidadActual += 20;
    }

    frenar(): void {
        this.velocidadActual -= 20;
    }

}