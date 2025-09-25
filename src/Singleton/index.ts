class Configuracion{
    private static instancia : Configuracion;
    private modo:{[tipo:string]:string} = {};

    private constructor(){}

    public static obtenerInstancia():Configuracion{
        if(!Configuracion.instancia){
            Configuracion.instancia = new Configuracion;
        }
        return Configuracion.instancia;
    }

    public set(modo:string, tipo:string):void{
        this.modo[modo] = tipo;
    }

    public get(tipo:string):string{
        return this.modo[tipo];
    }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "produccion");
console.log(conf2.get("modo"));