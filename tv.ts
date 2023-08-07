class Televisor {
    isOn : boolean;
    volume : number;
    channel : number;
    constructor(on : boolean = false, vol : number = 10, chan : number = 24) {
        this.isOn = on;
        this.volume = vol;
        this.channel = chan;
    } //el constructor siempre es una función, modifica las instancias (en este caso tv01), no la clase (Televisor)
    switchOnOff(): void {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(): void {
        this.volume = this.volume + 1;
        if (this.volume > 100) {
            this.volume = 100;
            console.log ("max vol");
        }
    } //poner un limitador de canal desde 0 a 99, no negativos, no letras
    volDown(): void {
        this.volume = this.volume - 1;
        if (this.volume <= 0) {
            this.volume = 0;
            console.log("mute");
        }
    }
    channelUp(): void {
        this.channel = this.channel + 1;
        if (this.channel > 99) {
            this.channel = 99;
            console.log ("error");
        }
    }
    channelDown(): void {
        this.channel = this.channel - 1;
        if (this.channel < 1) {
            this.channel = 1;
            console.log ("error")
        }
    }
    pickChannel(channel : number ): void { //poner un limitador de canal desde 1 a 99, no negativos, no letras
        //early return 
        if (!this.isOn) return ; //no hace falta poner llave pues es una sola linea

        this.channel = channel;
        console.log("cambiaste al canal" , this.channel);
        if (this.channel < 1 || this.channel > 99) {
            this.channel = 24;                       //me devuelve al canal 24
            console.log ("no existe este canal");
        }
    }
    info (): void {
        console.log ("canal: " , this.channel , "vol: " , this.volume , "hora: ")
    }
}



const tv01 = new Televisor ();
tv01.switchOnOff();

console.log("usted esta viendo el canal" , tv01.channel);
console.log("vol" , tv01.volume);

tv01.volUp();
tv01.channelUp();
tv01.info();















