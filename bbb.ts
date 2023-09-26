import { AutoDeportivo , AutoCiudad } from "./aaa";

let mustang = new AutoDeportivo ("ford" , "mustang" , 2023 , false , 0 , ["aleron" , "vidrios polarizados"]);

console.log(mustang.obtenerInfo());
mustang.acelerar();
mustang.acelerar();
console.log(mustang.obtenerInfo());

let clio = new AutoCiudad ("renault" , "clio" , 2008 , false , 0);

console.log(clio.obtenerInfo());
clio.acelerar();
clio.acelerar();
console.log(clio.obtenerInfo());
console.log(mustang.accesoriosDeportivos);
