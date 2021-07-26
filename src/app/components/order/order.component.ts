import { Component, Input, OnInit } from '@angular/core';
import { itemInterface } from 'src/app/model/item.model';

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
  @Input() state:string = ''

  constructor() { }

  ngOnInit(): void {
  }

  preparar(){
      this.state = 'preparando';
    //Cambiar el estado de la orden a 'Cocinando
  }

}
