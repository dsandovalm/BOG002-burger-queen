import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['../form.component.scss']
})
export class ClienteComponent implements OnInit {
  clienteForm = new FormGroup({
    nombre : new FormControl(''),
    mesa : new FormControl('')
  })

  popUpActivo:boolean = false;
  estadoMesa:string = 'inicial';
  

  constructor( 
    private popUpsService:PopUpsService, 
    private estadosMesaService:EstadosMesaService 
  ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
    this.estadosMesaService.changeState.subscribe( (state) => {
      this.estadoMesa = state;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.clienteForm.value);
    this.closePopUp();
    // Crear nueva orden
    // Abrir el menú
    this.estadosMesaService.setState('orden')
  }

  closePopUp(){
    this.popUpsService.closePopUp();
    console.log( 'Cerrando formulario' )
  }
}
