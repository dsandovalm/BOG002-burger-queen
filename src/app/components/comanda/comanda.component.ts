import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

 @Input() nombre: string = '';
  mesa: number = 0;

  constructor( private clienteService:ClienteService ) { 
    this.clienteService.changeNombre.subscribe( (nombreCliente) => {
      console.log('suscrito');
      this.nombre = nombreCliente;
      console.log(nombreCliente, 'comanda');
    });
  }

  ngOnInit(): void {
    
    this.clienteService.changeNombre.subscribe( (cliente) => {
      console.log(cliente, 'comanda');
    });
   this.getMesa();
  }

  getMesa(){
    this.clienteService.definirMesa.subscribe(data => {
      console.log('la mesa de servicio', data)
    })
  }
  setNombre(newNombre:string){
    this.nombre = newNombre;
  }

  setMesa(newMesa:number){
    this.mesa = newMesa;
  }

}
