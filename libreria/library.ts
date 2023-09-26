import { LibraryItem } from "./libraryItem";
import { User } from "./user";
import { Loan } from "./loan";
import { Book } from "./book";
import { Magazine } from "./magazine";



class Library {
    private items: LibraryItem[];
    private users: User[];
    private loans: Loan[];
    //private loanDate : Date;
    //private librosPrestados : number [] = [];
    public constructor() {
      this.items = [];
      this.users = [];
      this.loans = [];
      //this.loanDate = new Date ();
    }
    addItem(item: LibraryItem): void {
      this.items.push(item);
    }
    addUser(user: User): void {
      this.users.push(user);
    }

    loanItem (item: LibraryItem , user: User) : void {

      if (!this.isUserValid(user)) {

        console.log("Usuario no registrado");

        return;

      }

      const userLoans = this.loans.filter ((loan) => loan.getUser() === user);
      
      if (userLoans.length >= 3) {

        console.log ("El usuario ya tiene 3 préstamos activos y no puede retirar mas items.");

        return;

      }

      const existingItem: LibraryItem | undefined = this.findItem(item);

      if (!existingItem || !existingItem.isItemAvailable()) {

        console.log("Item no está disponible.");

        return;

      }

      existingItem.markAsUnavailable();

      const loan = new Loan(existingItem, user);

      this.loans.push(loan);

      console.log(

        `${user.getUserName()} retira "${item.getTitle()}" con fecha de devolución ${loan

          .getDueDate()

          .toLocaleDateString()}`

      );


    }
  
    returnItem(item: LibraryItem, user: User, returnDate : Date): void {
      
      const loan = this.findActiveLoan(item, user);
      if (!loan) {
        throw new Error ("Prestamo no registrado. Revise titulo y usuario");
        //console.log("Préstamo no registrado. Revise Título y Usuario");
        //return;
      }
      
      const existingItem = this.findItem(item);
      if (existingItem) {
        existingItem.markAsAvailable();
      }

      this.loans = this.loans.filter((l) => l !== loan);
      console.log(`${user.getUserName()} devolvió "${item.getTitle()}" en la fecha "${returnDate.toLocaleDateString()}"`);

      const oneWeek = 7*24*60*60*1000 //una semana en milisegundos
      //const devDay = Date.now();
      const dueDate = loan.getDueDate().getTime();
      const returnTime = returnDate.getTime();

      if (returnTime - dueDate > oneWeek) {
        console.log (`${user.getUserName()} ha sido penalizado por mantener el libro por más de una semana.`);
      }

    }

    private findActiveLoan(item: LibraryItem, user: User): Loan | undefined {
      return this.loans.find (
        (loan) => loan.getItem() === item && loan.getUser() === user
      );
    }

    private isUserValid(user: User): boolean {
      return this.users.includes(user);
    }

    private findItem(item: LibraryItem): LibraryItem | undefined {
      return this.items.find((prestamo) => prestamo === item);
    }
  }
    /*prestarLibros (librosPrestados : number[]) : string {
      if (this.librosPrestados.length < 3) {

          this.items.push(librosPrestados);

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

  */
 
const library = new Library();
const book01 = new Book("La reina de las abejas", "Jacob Grimm", 2000);
const book02 = new Book("Vueltas Locas", "Juan Laborde", 2023);
const book03 = new Book("Volvé a Chaves", "Agustin Bridda", 2023);
const book04 = new Book("El Lushio pá", "Ricardo Amoroso", 2022);
const magazine01 = new Magazine("Pronto", "Fernando Cerolini", 2011);
const user01 = new User(
  "Marcelo Tenaglia",
  { street: "Av. J. D. Peron", number: 1082, apartment: "-" },
  "2983388125"
);
const user02 = new User(
  "Nyx Fernández",
  {
    street: "41 bis",
    number: 1142,
    apartment: "-",
  },
  "2983562220"
);

library.addItem(book01);
library.addItem(book02);
library.addItem(book03);
library.addItem(book04);
library.addUser(user01);
library.loanItem(book01,user01);
library.loanItem(book02,user01);
library.loanItem(book03,user01);
library.loanItem(book04,user01);
library.returnItem(book01,user01,new Date (10/12/2023));

/*library.addItem(book01);
library.addItem(book02);
library.addItem(book03);
library.addItem(book04);
library.addUser(user02);
library.addUser(user01);
library.loanItem(book01,user02);
library.returnItem(book01,user02,new Date(2023, 8, 20));
library.loanItem(book01,user01);*/








