import { itemInterface } from "./item.model";

export interface pedidoInterface {
    cliente: {
        nombre:string,
        mesa:number
    },
    items:itemInterface[],
    estado:string,
    registrado: number,
    entregado: Date | null,
    id?:string,
}

/* como Clase
class Pedido {
    cliente = {};
    registrado: Date;
    constructor (
        nombre:string, 
        mesa:number, 
        private items:itemInterface[],
    ){
        this.cliente = {
            nombre,
            mesa
        }
        this.registrado = new Date();
    } 

    duracion(){
        let now:any = new Date();
        let tiempo =  now - this.registrado;
        return tiempo;
    }
    precioTotal():number{
        let total = 0;
        this.items.map( item => {
            total = total + item.valor;
        })
        return total;
    }

} */