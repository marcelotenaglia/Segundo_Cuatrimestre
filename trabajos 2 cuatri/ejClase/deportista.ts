class Deportista {
    private nombre : string;
    private edad : number;
    private disciplina : string;

    constructor (nombre : string , edad : number , disciplina : string) {
        this.nombre = nombre; 
        this.edad = edad;
        this.disciplina = disciplina;
    }    
    
    
}

const player1 : Deportista = new Deportista ("Marcelo" , 24 , "futbol");
console.log (player1);




