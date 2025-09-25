interface Equipo{
    detalles():string;
}

class Notebook implements Equipo{
    nombre : string
    ram:string;
    procesador:string;

    constructor(nombre:string, ram:string, procesador:string){
        this.nombre=nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles():string{
        return`Tipo:Notebook, Nombre:${this.nombre}, RAM:${this.ram}, Procesador:${this.procesador}`
    }
}

class Desktop implements Equipo{
    nombre : string
    ram:string;
    procesador:string;

    constructor(nombre:string, ram:string, procesador:string){
        this.nombre=nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles():string{
        return `Tipo:Desktop, Nombre:${this.nombre}, RAM:${this.ram}, Procesador:${this.procesador}`
    }
}

class Servidor implements Equipo{
    nombre : string
    ram:string;
    procesador:string;

    constructor(nombre:string, ram:string, procesador:string){
        this.nombre=nombre;
        this.ram = ram;
        this.procesador = procesador;
    }

    detalles(): string {
        return `Tipo:Servidor, Nombre:${this.nombre}, RAM:${this.ram}, Procesador:${this.procesador}`
    }
}

class EquipoFactory{
    public crearEquipo(tipo:string, nombre:string, ram:string, procesador:string):Equipo{
        if(tipo === 'Notebook'){
            return new Notebook(nombre, ram, procesador);
        } else if(tipo === 'Desktop'){
            return new Desktop(nombre, ram, procesador);
        } else if(tipo === 'Servidor'){
            return new Servidor(nombre, ram, procesador);
        }
        throw new Error("Ese tipo de equipo no existe");
    }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());