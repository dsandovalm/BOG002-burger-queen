import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadosMesaService {

  state:string = 'inicial';
  getState = new Subject <string> ();
  changeState = this.getState.asObservable();

  constructor() { }

  setState(newState:string){
    this.state = newState;
    this.getState.next(this.state); 
  }
}
