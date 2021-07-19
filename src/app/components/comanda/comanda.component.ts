import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  nombre: string = '';
  mesa: number = 0;

  constructor( private clienteService:ClienteService ) { }

  ngOnInit(): void {
    this.clienteService.changeNombre.subscribe( (nombreCliente) => {
      console.log('suscrito');
      this.nombre = nombreCliente;
      console.log(nombreCliente, 'comanda');
    });
    this.clienteService.changeMesa.subscribe( (mesaCliente) => {
      this.mesa = mesaCliente;
    });
  }

  setNombre(newNombre:string){
    this.nombre = newNombre;
  }

  setMesa(newMesa:number){
    this.mesa = newMesa;
  }

}
