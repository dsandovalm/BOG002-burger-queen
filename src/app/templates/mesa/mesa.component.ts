import { Component, OnInit, HostBinding } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ThemeService } from 'src/app/services/theme.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {

  nombre:string = '';
  mesa:number = 0;

  state:string = 'inicial'; // Inicial Create Edit
  @HostBinding('class') componentCssClass:any = 'dark-theme';

  constructor( 
    private estadosMesaService:EstadosMesaService,
    private ThemeService: ThemeService,
    private clienteService:ClienteService 
    ) { }

  ngOnInit(): void {
    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentCssClass = componentClass;
    });
    this.clienteService.changeNombre.subscribe( (nombreCliente) => {
      console.log(nombreCliente, 'mesas')
      this.nombre = nombreCliente;
    });
    this.clienteService.changeMesa.subscribe( (mesaCliente) => {
      this.mesa = mesaCliente;
    });
    this.clienteService.definirMesa.subscribe( data => {
      console.log('la mesa de servicio', data)
    })
  }

  setState(state:string){
    this.state = state
  }
}