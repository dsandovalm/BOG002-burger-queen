import { Component, Input, OnInit } from '@angular/core';
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
    
    this.nombre = this.clienteService.get().nombre;
    this.mesa = this.clienteService.get().mesa;
  }

}
