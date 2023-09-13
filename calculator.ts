class Calculadora {
   
    suma (a:number , b:number) {
       return a + b;
    };
    resta (a:number , b:number) {
        return a - b;
    }; 
    multiply (a:number , b:number) {
        return a * b;
    };
    divide (a:number , b:number) : number | string {
        if (b === 0)  return ("error");
        return a / b; 
}
}

let Calculadora1 = new Calculadora ();

console.log (Calculadora1.divide(15,0))
