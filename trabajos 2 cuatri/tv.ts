class Televisor {
    private isOn : boolean;       //private es modificador de acceso
    private volume : number;
    private channel : number;
    constructor(on : boolean = false, vol : number = 24, chan : number = 10) {
        this.isOn = on;
        this.volume = vol;
        this.channel = chan;
    } //el constructor siempre es una función, permite crear o modificar un objeto (instancia es lo mismo) a partir de los parametros que se le pasan, las instancias (en este caso tv01), no la clase (Televisor)
    switchOnOff(): void {
        this.isOn = !this.isOn;
        console.log(this.isOn ? "encendido" : "apagado");
    }
     volUp(): void {
        if (!this.isOn) return
        if (this.volume > 100) {
            this.volume = 100;
            console.log ("max vol");
        } else {
            this.volume = this.volume + 1;
        }
    } //poner un limitador de volumen desde 0 a 100
    volDown(): void {
        if (!this.isOn) return
        if (this.volume <= 0) {
            this.volume = 0;
            console.log("mute");
        } else {
            this.volume = this.volume - 1;
        }
    }
    channelUp(): void {
        if (!this.isOn) return 
            if (this.channel === 99) {
                this.channel = 1;
            } else {
                this.channel ++;
            }
        console.log (this.channel);
    }
    channelDown(): void {
        if (!this.isOn) return 
        if (this.channel === 1) {
            this.channel = 99;
        } else {
            this.channel --;
        }
    console.log (this.channel);
    }
    pickChannel(channel : number ): void { 
        //early return 
        if (!this.isOn) return ; //no hace falta poner llave pues es una sola linea
        this.channel = channel;
        console.log("cambiaste al canal" , this.channel);
        if (this.channel < 1) {                      
            this.channel = 1;
        } if (this.channel > 99) {
            this.channel = 99;
        }
    }
    info (): void {
        console.log ("canal: " , this.channel , "vol: " , this.volume , "hora: ")
    }
}



let tv01 : Televisor = new Televisor ();





























