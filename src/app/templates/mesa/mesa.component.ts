<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import menuData from 'src/app/services/menu.json'
=======
import { Component, OnInit, HostBinding } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
>>>>>>> develop

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
<<<<<<< HEAD
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
=======
  state:string = 'inicial'; // Inicial Create Edit
  @HostBinding('class') componentCssClass:any = 'dark-theme';

  constructor( private estadosMesaService:EstadosMesaService ) { }

  ngOnInit(): void {
    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
  }

  setState(state:string){
    this.state = state
>>>>>>> develop
  }

}
