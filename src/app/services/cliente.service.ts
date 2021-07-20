import { Injectable, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor () {}

  cliente: any = {
    nombre:'',
    mesa:0
  };

  add(nombre: string, mesa:number) {
    this.cliente = {
      nombre: nombre,
      mesa: mesa
    };
  }

  get(){
    return this.cliente
  }
}
