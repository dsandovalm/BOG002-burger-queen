import { Component, OnInit } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  state:string = 'inicial' ;

  constructor( private estadosMesaService:EstadosMesaService ) { }

  ngOnInit(): void {
      this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
  }

  public setState(state:string){
    this.estadosMesaService.setState(state)
  }  

}
