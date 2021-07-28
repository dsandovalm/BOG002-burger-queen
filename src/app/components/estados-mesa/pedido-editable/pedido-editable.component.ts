import { Component, OnInit } from '@angular/core';
import { pedidoInterface } from 'src/app/model/pedido.model';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido-editable',
  templateUrl: './pedido-editable.component.html',
  styleUrls: ['./pedido-editable.component.scss']
})
export class PedidoEditableComponent implements OnInit {

  ordenes:any= [];

  constructor(
    private estadoMesas: EstadosMesaService,
    private firestoreService: FirestoreService,
    private clienteService: ClienteService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  goBack() {
    this.estadoMesas.setState('inicial');
  }

  getOrders() {
    this.firestoreService.getOrdersRegister().subscribe( orderSnapshot => {
      orderSnapshot.forEach((data: any) => {
        if (data.payload.doc.data().estado == 'registrado') {
          this.ordenes.push({
            data :data.payload.doc.data(),
            id : data.payload.doc.id
          })
        }
      })
    });
  }

  click(orden:any){
    this.estadoMesas.setState('orden');
    this.clienteService.add(orden.data.cliente.nombre, orden.data.cliente.mesa);
    orden.data.items.forEach((element:any) => {
      this.pedidoService.add(element);  
    });
    this.pedidoService.changeEdit(true);
    this.firestoreService.setId(orden.id);
  }

}
