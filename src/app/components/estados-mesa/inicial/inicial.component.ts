import { Component, OnInit } from '@angular/core';
import { pedidoInterface } from 'src/app/model/pedido.model';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  popUpActivo:boolean = false;
  formulario:string = 'cliente';
  ordenes:pedidoInterface[]= [];

  btnNewOrder:string = 'NUEVO PEDIDO';
  btnEditOrder:string = 'EDITAR PEDIDO';

  constructor( 
    private popUpsService:PopUpsService,
    private firestoreService: FirestoreService,
    private estadoMesasService: EstadosMesaService 
  ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
  this.popUpsService.contentPopUp.subscribe( (form) => {
      this.formulario = form;
    });
    this.getOrders();
  }

  setForm(form:string){
    this.popUpsService.openPopUp(form );
  }

  changeState(state:string){
    this.estadoMesasService.setState('editar-pedido');
    this.ordenes = [];
  }

  getOrders() {
    this.firestoreService.getOrdersRegister().subscribe( orderSnapshot => {
      orderSnapshot.forEach((data: any) => {
        if (data.payload.doc.data().estado === 'listo') {
          this.ordenes.push(data.payload.doc.data())
        }
      })
    });
  }

}
