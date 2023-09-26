//const cr = require("node:crypto");

/* enum AccountType {
    CuentaSueldo = "cuenta sueldo",
    CuentaDolares = "cuenta de ahorro en dolares",
    CuentaPesos = "cuenta de ahorro en pesos"
}

class accountType {
    private type : AccountType;
    
    constructor (type : accountType) {
        this.type = type;
    }
} */

class BankAccount {
    private owner : string;
    private balance : number;
    private accountType : string;

    constructor (owner : string , balance : number , accountType : string) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
    }

    deposit (amount : number) : void {
        this.balance = this.balance + amount;
        console.log (this.balance);
    }
    
    withdraw (amount : number) : void {
        this.balance = this.balance - amount;
        if (this.balance <= 0) {
            console.log ("Saldo Insuficiente");
        } else {
            console.log (this.balance);
        } 
    }

    getBalance () {
        console.log (this.owner , "tiene en su" , this.accountType , this.balance , "pesos");
    }
} 

let cuentaMarcos : BankAccount = new BankAccount ("Ian Marcos Bertoni" , 300 , "cuenta sueldo");


cuentaMarcos.withdraw(100);
cuentaMarcos.getBalance();


