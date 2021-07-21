import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpsService {

  activo:boolean = false;
  formulario:string = 'cliente';
  tipo:string = '';

  private getForm = new Subject <string> ();
  private getActivo = new Subject <boolean> ();
  private getTipo = new Subject <string>();

  contentPopUp = this.getForm.asObservable();
  statePopUp = this.getActivo.asObservable();
  itemTipo = this.getTipo.asObservable(); 

  openPopUp(form:string, tipo:string=''){
    this.formulario = form;
    this.tipo = tipo;
    this.activo = true;
    this.getForm.next(this.formulario);
    this.getActivo.next(this.activo);
    this.getTipo.next(this.tipo);
  } 
  
  closePopUp(){
    this.activo = false;
    this.getActivo.next(this.activo);
  }

  constructor() { }
}
