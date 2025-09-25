class Configuracion{
    private static instancia : Configuracion;

    constructor(){}

    public static obtenerInstancia():Configuracion{
        if(!Configuracion.instancia){
            Configuracion.instancia = new Configuracion;
        }
        return Configuracion.instancia;
    }

    public set(modo:string):void{
        
    }

    public get(modo:string, produccion:string):string{
        return `${modo}`
        return `${produccion}`
    }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccion");
console.log(conf2.get("modo"));