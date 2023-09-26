import { randomUUID } from 'node:crypto'; //named import, paquete importado

export interface iAddress {
    street : string;
    number : number;
    apartment : string;
}

export class User {
    
    private id : string = randomUUID();
    private userName : string;
    private userAddress : iAddress;
    private phoneNumber : string;
    private isPenalized : boolean;
    private penaltyPoints : number = 0; 

    constructor (userName : string, userAddress : iAddress, phoneNumber : string, isPenalized : boolean = false) {
        
        this.userName = userName;
        this.userAddress = userAddress;
        this.phoneNumber = phoneNumber;
        this.isPenalized = isPenalized;

    }

    public setUserName (userName : string) : void {
        this.userName = userName;
    }

    public setUserAddress (userAddress : iAddress) : void {
        this.userAddress = userAddress;
    }
    
    public setPhoneNumber (phoneNumber : string) : void {
        this.phoneNumber = phoneNumber;
    }

    public getId () : string {
        return this.id
    }

    public getUserName () : string {
        return this.userName
    }

    public getUserAddress () : iAddress {
        return this.userAddress
    }

    public getUserPhone () : string {
        return this.phoneNumber
    }

    public applyPenalty () {
        
        const oneWeek = 7*24*60*60*1000;
        const currentDay = new Date();
        this.isPenalized = new Date (currentDay.getTime() + oneWeek);
    }
    
    loanLibraryItem (libraItem : string) : void {}

    returnLibraryItem (libraItem : string) : void {}

    /*public setScoring () : void {
        switch () {}
    }*/

}