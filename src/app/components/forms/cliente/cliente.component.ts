import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ClienteService } from 'src/app/services/cliente.service';

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

  nombre:string = '';
  mesa:number = 0;

  constructor( 
    private popUpsService:PopUpsService, 
    private estadosMesaService:EstadosMesaService ,
    private clienteService:ClienteService
  ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
    this.estadosMesaService.changeState.subscribe( (state) => {
      this.estadoMesa = state;
    });
    this.clienteService.changeNombre.subscribe( (nombreCliente) => {
      this.nombre = nombreCliente;
    });
    this.clienteService.changeMesa.subscribe( (mesaCliente) => {
      this.mesa = mesaCliente;
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.closePopUp();
    // Crear nueva orden
    // Abrir el menú
    this.estadosMesaService.setState('orden');
    this.clienteService.setNombre(this.clienteForm.value.nombre);
    this.clienteService.setMesa(this.clienteForm.value.mesa);
    console.log(this.clienteForm.value.nombre,'cliente')
  }


  closePopUp(){
    this.popUpsService.closePopUp();
  }
}
