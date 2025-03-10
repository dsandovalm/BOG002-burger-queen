import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { itemInterface } from 'src/app/model/item.model'

@Injectable({
  providedIn: 'root'
})

export class PedidoService {

  items : itemInterface[] = [];
  edit: boolean = false;

  getPedido = new BehaviorSubject(this.items);
  addItem = this.getPedido.asObservable();
  constructor() { }

  get(){
    return this.items
  }

  getEdit(){
    return this.edit;
  }

  changeEdit( state:boolean ) {
    this.edit = state;
  }

  add (nuevoItem:itemInterface) {
    let nombres: string[] = this.items.map( item => {
      return item.nombre;
    })
    let index:number = nombres.indexOf(nuevoItem.nombre);
    if( index === -1 ) {
      this.items.push(nuevoItem);
    } else {
      this.items[index].cant++;
      this.items[index].valor = this.items[index].valor + nuevoItem.valor;
    }
    this.getPedido.next(this.items);
  }

  reduce (item:itemInterface) {
    // Reduce una unidad de algun item
    let nombres: string[] = this.items.map( item => {
      return item.nombre;
    })
    let index:number = nombres.indexOf(item.nombre);
    if( index != -1 ) {
      if( this.items[index].cant > 1 ){
        this.items[index].cant--;
      this.items[index].valor = this.items[index].valor - item.valor;
      } else {
        this.items.splice( index, 1 )
      }
    }
    this.getPedido.next(this.items)
  }

  delete(nombreItem:string){
    //Elimina un item completo
    let nombres: string[] = this.items.map( item => {
      return item.nombre;
    })
    let index:number = nombres.indexOf(nombreItem);
    if( index != -1 ) {
      this.items.splice( index, 1 )
    }
    this.getPedido.next(this.items)
  }

  clean(){
    // Limpia todo el pedido
    this.items = [];
    this.getPedido.next(this.items)
  }
}
