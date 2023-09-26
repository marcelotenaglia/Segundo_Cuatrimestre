class Personaje {
    protected name : string;
    private hp : number;
    private energy : number;
    
    constructor (nombre : string , vida : number , energia : number) {
        this.name = nombre;
        this.hp = vida;
        this.energy = energia;
    }

    atacar () {} ;
    curar () {};
}

class Guerrero extends Personaje {
    strength : number;

    constructor (nombre : string , vida : number , energia : number , fuerza : number) {
        super (nombre, vida, energia);
        this.strength = fuerza;    
    }
       
        

    usarEscudo () {};
}

class Mago extends Personaje {
    mana : number;

    constructor (nombre : string , vida : number , energia : number , mana : number) {
        super (nombre, vida, energia);
        this.mana = mana;
    }

    lanzarEchizo () {};
}





