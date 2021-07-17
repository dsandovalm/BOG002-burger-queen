import { Component, OnInit, HostBinding } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})

export class MesaComponent implements OnInit {

  state:string = 'inicial'; // Inicial Create Edit
  @HostBinding('class') componentCssClass:any = 'dark-theme';

  constructor( 
    private estadosMesaService:EstadosMesaService,
    private ThemeService: ThemeService 
    ) { }

  ngOnInit(): void {
    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentCssClass = componentClass;
    })
  }

  setState(state:string){
    this.state = state
  }
}