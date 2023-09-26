import { randomUUID } from 'node:crypto'; //named import, paquete importado

export class LibraryItem {

    private id : string = randomUUID();
    private title : string;
    private year : number;
    private isAvailable : boolean = true;

    constructor (title : string, year : number) {

        this.title = title;
        this.year = year;

    }

    setTitle (title : string) : void {
        this.title = title;
    }

    setYear (year : number) : void {
        this.year = year;
    }

    getTitle () {
        return this.title
    }

    getYear () {
        return this.year
    }

    isItemAvailable () : boolean {
        return this.isAvailable;
    }

    markAsUnavailable () {
        this.isAvailable = false;
    }

    markAsAvailable () {
        this.isAvailable = true;
    }

}