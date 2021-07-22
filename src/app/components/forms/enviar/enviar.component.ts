import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.component.html',
  styleUrls: ['../form.component.scss']
})
export class EnviarComponent implements OnInit {

  constructor(
    private estadosMesaService:EstadosMesaService,
    private pedidoService: PedidoService,
    private popUpsService:PopUpsService,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit(): void {
  }

  keep(){
    this.popUpsService.closePopUp();
  }

  setPedido(){
    this.firestoreService.setOrder('nuevo pedido desde pop up');
    this.pedidoService.clean();
    this.popUpsService.closePopUp();
    this.estadosMesaService.setState('inicial')      
  }

}

