import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { EstadosMesaService } from 'src/app/services/estados-mesa.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { FirestoreService } from 'src/app/services/firestore.service';
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
    private pedidoService: PedidoService,
    private firestoreService: FirestoreService
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

  precioTotal():number{
    let total:number = 0;
    this.pedido.map((item:itemInterface) =>{
      total = total + item.valor;
    })
    return total
  }
  confirmation(message:string){
    if (window.confirm(message)){
      this.pedidoService.clean();
      this.estadosMesaService.setState('inicial')
    }      
  }

  setPedido(){
    if(window.confirm('Enviar pedido')){
      this.firestoreService.setOrder('nuevo pedido');
      this.estadosMesaService.setState('inicial')
    }
  }

  // goBack(){
  //   this.pedidoService.clean();
  //   this.estadosMesaService.setState('inicial');
  // }

  public setState(state:string){
    this.estadosMesaService.setState(state)
  }  

  public addItem(item:itemInterface){
    this.pedidoService.add({ 
      nombre: item.nombre,
      cant: 1,
      valor: (item.valor/item.cant) 
    })
  }

  public reduceItem(item:itemInterface){
    this.pedidoService.reduce({ 
      nombre: item.nombre,
      cant: 1,
      valor: (item.valor/item.cant) 
    })
  }
  
  public deleteItem(item:string){
    this.pedidoService.delete(item)
  }
}
