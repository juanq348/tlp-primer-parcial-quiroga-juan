interface Item{
    nombre: string,
    tipo: string,
    estado: string
}

class InventarioViejo{
    items : Item[] = [];
    public addItem(nombre: string, tipo:string, estado:string){
        const inventario = {nombre, tipo, estado};
        this.items.push(inventario);
    }
}

class AdaptadorInventario{
    private inventarioViejo : InventarioViejo; 

    constructor(inventarioViejo : InventarioViejo){
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre : string, tipo : string, estado : string){
        this.inventarioViejo.addItem(nombre, tipo, estado);
    }

    public listarEquipo() : Item[]{
        return this.inventarioViejo.items;
    }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible")
console.log(adaptador.listarEquipo());