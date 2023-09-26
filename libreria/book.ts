import { LibraryItem } from "./libraryItem";

export class Book extends LibraryItem {

    private author : string;
    
    constructor (title : string, author : string, year : number) {
        super (title, year);
        this.author = author;
    }

    setAuthor (author : string) : void {
        this.author = author
    }

    getAuthor () {
        return this.author;
    }
}