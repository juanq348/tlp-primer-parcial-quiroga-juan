interface Observador{
    actualizar(nombre: string, tipo:string , estado:string):void;
}

export class Soporte implements Observador{
    actualizar(nombre:string, tipo:string, estado: string):void{
        console.log(`\nSoporte notificado: ${nombre} ha cambiado su estado a ${estado}`)
    }
}

export class Equipo{
    private observadores : Observador[] = [];

    constructor(
        private nombre : string,
        private tipo : string,
        private estado : string
    ){}

    agregarObservador(observador: Observador):void{
        this.observadores.push(observador);
    }

    eliminarEquipo(observador: Observador):void{
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado : string):void{
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores():void{
        this.observadores.forEach(obs => obs.actualizar(this.nombre, this.tipo, this.estado));
    }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");