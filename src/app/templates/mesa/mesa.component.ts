import { Component, OnInit, HostBinding } from '@angular/core';
import menuData from 'src/app/services/menu.json'

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
  menu:any = menuData;
  tipo:string = 'principal';
  @HostBinding('class') componentCssClass:any = 'dark-theme';

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

<<<<<<< HEAD
=======
  public onThemeChange(e:string){
    this.componentCssClass = e;
  } 

>>>>>>> d9a9bea5224f95885e4ce83bdfa5bcc0f5fb947b
}
