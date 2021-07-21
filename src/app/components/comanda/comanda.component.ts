import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { itemInterface } from 'src/app/model/item.model';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {

  state:string = 'inicial' ;
  nombre: string = '';
  mesa: number = 0;
  pedido:itemInterface[] = [];

  constructor( 
    private estadosMesaService:EstadosMesaService,
    private clienteService:ClienteService,
    private pedidoService: PedidoService
     ) { }

  ngOnInit(): void {

    this.estadosMesaService.changeState.subscribe( (newState) => {
      this.state = newState;
    });
    this.nombre = this.clienteService.get().nombre;
    this.mesa = this.clienteService.get().mesa;
    
    this.pedidoService.addItem.subscribe((items)=>{
      this.pedido= items;
    })
  }

  public setState(state:string){
    this.estadosMesaService.setState(state)
  }  
  
  public deleteItem(item:string){
    this.pedidoService.delete(item)
  }
}
