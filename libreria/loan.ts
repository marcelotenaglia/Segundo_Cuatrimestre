import { randomUUID } from 'node:crypto'; //named import, paquete importado
import { LibraryItem } from './libraryItem';
import { User } from './user';
import { Book } from './book';
import { Magazine } from './magazine';

export class Loan {
    
    private id : string = randomUUID();
    private item : LibraryItem; 
    private user : User; 
    private loanDate : Date;
    private dueDate : Date; 
    private librosPrestados: LibraryItem[] = [];
    
    constructor (item : LibraryItem, user : User) {
        
        this.item = item;
        this.user = user;
        this.loanDate = new Date ();
        this.dueDate = new Date();
        this.dueDate.setDate (this.loanDate.getDate()+7)

    }  

    getId () : string {
        return this.id
    }

    getItem () : LibraryItem {
        return this.item
    }

    getUser () : User {
        return this.user
    } 

    getLoanDate () : Date {
        return this.loanDate
    }

    getDueDate () : Date {
        return this.dueDate
    }

    prestarLibros (item : LibraryItem) : string {
        if (this.librosPrestados.length < 3) {

            this.librosPrestados.push(item);

            this.loanDate = new Date ();

            return `El articulo ${item} ha sido prestado con éxito.`;

        } else {

            return "No se pueden prestar mas de tres libros a la vez.";

        }
    }

    penalizeUser () : string {

        const devDate : Date = new Date (); // Dia de la Devolucion
  
        const oneWeek = 7*24*60*60*1000; // una semana en milisegundos
  
        if (devDate.getTime() - this.loanDate.getTime() > oneWeek ) {
        
            return "Has devuelto el item fuera de tiempo, tienes una Penalización.";
  
        } else {
  
            return "No estas penalizado, o no tienes préstamos activos";
  
        }
    }

    
}

