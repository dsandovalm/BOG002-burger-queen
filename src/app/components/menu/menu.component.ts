import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { itemInterface } from 'src/app/model/item.model';
import { PopUpsService } from 'src/app/services/pop-ups.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() titulo:any = '';
  @Input() items:any[] = [];

  popUpActivo:boolean = false;
  formulario:string = 'cliente';

  pedido:itemInterface[] = [];

  constructor( 
    private pedidoService: PedidoService,
    private popUpsService:PopUpsService
  ) {}

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
  this.popUpsService.contentPopUp.subscribe( (form) => {
      this.formulario = form;
    });
  }

  addItem(item:itemInterface){
    this.pedidoService.add(item);
    this.pedido = this.pedidoService.get();
  }

  setForm(form:string, tipo:string){
    this.popUpsService.openPopUp(form, tipo);
  }

}
