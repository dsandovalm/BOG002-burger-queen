import { Component, Input, OnInit } from '@angular/core';
import { itemInterface } from 'src/app/model/item.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { pedidoInterface } from 'src/app/model/pedido.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input() id:string = '';
  @Input() mesa:number = 0;
  @Input() cliente:string = '';
  @Input() tiempo:number = 0;
  @Input() orden:itemInterface[] = [];
  @Input() state:string = '';

  constructor( private firestoreService:FirestoreService ) { }

  ngOnInit(): void {
  }

  preparar(){
    let doc = this.firestoreService.setState('cocinando',this.id)
    //Cambiar el estado de la orden a 'Cocinando
  }

}
