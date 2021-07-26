import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { PopUpsService } from 'src/app/services/pop-ups.service';


@Component({
  selector: 'app-cancelar',
  templateUrl: './cancelar.component.html',
  styleUrls: ['../form.component.scss']
})
export class CancelarComponent implements OnInit {

  constructor(
    private estadosMesaService:EstadosMesaService,
    private pedidoService: PedidoService,
    private popUpsService:PopUpsService
  ) { }

  ngOnInit(): void {
  }
  back(){
    this.pedidoService.clean();
    this.popUpsService.closePopUp();
    this.estadosMesaService.setState('inicial');
    this.pedidoService.changeEdit(false);      
  }
  keep(){
    this.popUpsService.closePopUp();
  }

}
