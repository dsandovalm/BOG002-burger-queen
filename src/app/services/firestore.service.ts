import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
    estado: 'prueba',
    registrado: new Date,
    entregado: null 

  }

  constructor(
    private firestore: AngularFirestore,
    private clienteService:ClienteService,
    private pedidoService: PedidoService
    ) { }

  /* Almacenar pedidos */
  public setOrder() {
    return this.firestore.collection('pedidos').add(this.pedido);
  }

}
