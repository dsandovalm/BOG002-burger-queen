import { Component, OnInit } from '@angular/core';
import { PopUpsService } from 'src/app/services/pop-ups.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})

export class PopUpComponent implements OnInit {

  activo:boolean = false;
  formulario:string = 'cliente';

  constructor( private popUpsService:PopUpsService ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.activo = state;
    });
  this.popUpsService.contentPopUp.subscribe( (form) => {
      this.formulario = form;
    });
  }

  getClass(){
    return this.activo ? 'open' : 'closed'
  }

  openPopUp(nombreForm:string){
    this.formulario = nombreForm;
    this.activo = true;
  }

  closePopUp(){
    this.activo = false;
  }

}
