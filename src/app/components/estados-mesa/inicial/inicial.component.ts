import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss']
})
export class InicialComponent implements OnInit {

  popUpActivo:boolean = false;
  formulario:string = 'cliente';

  btnNewOrder:string = 'NUEVO PEDIDO';
  btnEditOrder:string = 'EDITAR PEDIDO';

  constructor( private popUpsService:PopUpsService  ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
  this.popUpsService.contentPopUp.subscribe( (form) => {
      this.formulario = form;
    });
  console.log('Servicios')
  }

  setForm(form:string){
    this.popUpsService.openPopUp(form);
    console.log( 'Enviando formulario', form )
  }

}
