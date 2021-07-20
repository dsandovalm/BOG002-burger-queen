import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopUpsService {

  activo:boolean = false;
  formulario:string = 'cliente';

  private getForm = new Subject <string> ();
  private getActivo = new Subject <boolean> ();

  contentPopUp = this.getForm.asObservable();
  statePopUp = this.getActivo.asObservable();

  openPopUp(form:string){
    this.formulario = form;
    this.activo = true;
    this.getForm.next(this.formulario);
    this.getActivo.next(this.activo);
  } 
  
  closePopUp(){
    this.activo = false;
    this.getActivo.next(this.activo);
  }

  constructor() { }
}
