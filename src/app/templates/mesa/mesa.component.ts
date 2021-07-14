import { Component, OnInit } from '@angular/core';
import menuData from 'src/app/services/menu.json'

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
  menu:any = menuData;
  tipo:string = 'principal';

  btnNewOrder:string = 'NUEVO PEDIDO';
  btnEditOrder:string = 'EDITAR PEDIDO';
  constructor() {
    
  }

  ngOnInit(): void {
  }

  getActivo(): any{
    return this.menu[this.tipo]
  }

  switchMenu(): void{
    this.tipo = this.tipo === 'principal' ? this.tipo = 'desayunos' : this.tipo = 'principal';
  }

}
