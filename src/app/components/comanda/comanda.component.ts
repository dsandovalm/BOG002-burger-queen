import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  state:string = 'inicial' ;
  nombre: string = '';
  mesa: number = 0;

  constructor( 
    private estadosMesaService:EstadosMesaService,
    private clienteService:ClienteService
     ) { }

  ngOnInit(): void {
    this.nombre = this.clienteService.get().nombre;
    this.mesa = this.clienteService.get().mesa;  
    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
  }

  public setState(state:string){
    this.estadosMesaService.setState(state)
  }  

}
