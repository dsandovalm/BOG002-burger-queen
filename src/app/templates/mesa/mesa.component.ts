import { Component, OnInit, HostBinding } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent implements OnInit {
  state:string = 'inicial'; // Inicial Create Edit
  @HostBinding('class') componentCssClass:any = 'dark-theme';

  constructor( private estadosMesaService:EstadosMesaService ) { }

  ngOnInit(): void {
    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
  }

  setState(state:string){
    this.state = state
  }

}
