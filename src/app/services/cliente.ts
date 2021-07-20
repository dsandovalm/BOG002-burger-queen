import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  nombre: string = '';
  getNombre = new Subject <string> ();
  changeNombre = this.getNombre.asObservable();

  mesa: number = 0;
  getMesa = new Subject <number> ();
  changeMesa = this.getMesa.asObservable();


  constructor() { 
  }

  setNombre(newNombre:string){
    this.nombre = newNombre;
    this.getNombre.next(this.nombre);
    console.log(this.nombre,'service')
  }

  setMesa(newMesa:number){
    this.mesa = newMesa;
    this.getMesa.next(this.mesa); 
  }
}
