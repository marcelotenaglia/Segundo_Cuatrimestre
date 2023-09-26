import { LibraryItem } from "./libraryItem";

export class Magazine extends LibraryItem {

    editor : string;

    constructor (name : string, editor : string, year : number) {
        super (name, year);
        this.editor = editor;
    }

    setEditor (editor : string) : void {
        this.editor = editor;
    }

    getEditor () {
        return this.editor;
    }
}