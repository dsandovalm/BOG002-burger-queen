import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { itemInterface } from '../model/item.model';
import { pedidoInterface } from '../model/pedido.model';
import { ClienteService } from './cliente.service';
import { PedidoService } from './pedido.service';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  pedido:pedidoInterface = {
    cliente : {
      nombre: this.clienteService.get().nombre,
      mesa: this.clienteService.get().mesa
    },
    items:this.pedidoService.get(),
    estado: 'registrado',
    registrado: Date.now(),
    entregado: null 

  }
  ordenId:string = '';

  constructor(
    private firestore: AngularFirestore,
    private clienteService:ClienteService,
    private pedidoService: PedidoService
    ) {
      this.pedidoService.addItem.subscribe((items:itemInterface[])=>{
        this.pedido.items = items;
      })
    }


  /* Almacenar pedidos */
  public setOrder() {
    this.pedido.cliente.nombre = this.clienteService.get().nombre;
    this.pedido.cliente.mesa = this.clienteService.get().mesa;
    return this.firestore.collection('pedidos').add(this.pedido);
  }

  /* Traer data, estado : Registrado */
  public getOrdersRegister() {
      return this.firestore.collection('pedidos').snapshotChanges();

  }

  /* Cambiar estado de una orden */


  /* Edita pedido */
  public setOrdenId(id:string){
    this.ordenId = id;
  }

  public setOrderEdit(){
    this.pedido.cliente.nombre = this.clienteService.get().nombre;
    this.pedido.cliente.mesa = this.clienteService.get().mesa;
    return this.firestore.collection('pedidos').doc(this.ordenId).set(this.pedido);
  }
}
