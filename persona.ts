class Person {
private    name : string;
private    age : number; 
constructor (nombre : string , edad : number) {
    this.name = nombre;
    this.age = edad;
}

setName () {
    console.log ("su nombre es: " , this.name);
}

setAge () {
    console.log ("su edad es: " , this.age);
}

info () {
    this.setName();
    this.setAge();
}

} 


const person1 : Person = new Person ("Marcelo" , 24);
person1.info();
