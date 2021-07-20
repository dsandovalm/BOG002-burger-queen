import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';
import { itemInterface } from 'src/app/model/item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  @Input() titulo:any = '';
  @Input() items:any[] = [];

  pedido:itemInterface[] = [];

  constructor( private pedidoService: PedidoService) { 

  }

  ngOnInit(): void {

  }

  addItem(item:itemInterface){
    this.pedidoService.add(item);
    this.pedido = this.pedidoService.get();
  }
}
