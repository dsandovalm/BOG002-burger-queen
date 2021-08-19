import { Component, Input, OnInit } from '@angular/core';
import { itemInterface } from 'src/app/model/item.model';
import { FirestoreService } from 'src/app/services/firestore.service';
import { pedidoInterface } from 'src/app/model/pedido.model';
import { PopUpsService } from 'src/app/services/pop-ups.service';

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

  constructor( 
    private firestoreService:FirestoreService,
    private popUpService: PopUpsService
  ) { }

  ngOnInit(): void {
    
  }

  preparar(){
    this.state = 'cocinando';
    let doc = this.firestoreService.setState(this.state,this.id);
  }
  terminar(){
    this.state = 'terminado';
    let doc = this.firestoreService.setState(this.state,this.id);
  }
  entregar(){
    this.state = 'listo';
    let doc = this.firestoreService.setState(this.state,this.id);
    //let doc = this.firestoreService.setId(this.id);
    //this.popUpService.openPopUp('entregar'); 
  }
}
