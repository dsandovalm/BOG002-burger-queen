import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PopUpsService } from 'src/app/services/pop-ups.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { itemInterface } from 'src/app/model/item.model';

@Component({
  selector: 'app-hamburguesa',
  templateUrl: './hamburguesa.component.html',
  styleUrls: ['../form.component.scss']
})
export class HamburguesaComponent implements OnInit {

  hambForm = new FormGroup({
    tipo : new FormControl(''),
    huevo : new FormControl(''),
    queso : new FormControl('')
  })

   popUpActivo:boolean = false;
   pedido:itemInterface[] = [];
  @Input() tipo:string =''; 

  constructor( 
    private popUpsService:PopUpsService,
    private pedidoService: PedidoService,
     ) { }

  ngOnInit(): void {
    this.popUpsService.statePopUp.subscribe( (state) => {
      this.popUpActivo = state;
    });
  }
  
  onSubmit(){
    let valorBase:number = this.tipo === 'Sencilla' ? 10 : 15;
    let adiciones:number = (this.hambForm.value.huevo ? 1 : 0) + (this.hambForm.value.queso ? 1 : 0);
    this.addItem( { 
      nombre: `Hamburguesa ${this.tipo} de ${this.hambForm.value.tipo} ${this.hambForm.value.huevo ? ' + huevo': ''} ${this.hambForm.value.queso ? ' + queso': ''}`, 
      valor: valorBase + adiciones, 
      cant:1 } );
    this.closePopUp();  
    
  }

  closePopUp(){
    this.popUpsService.closePopUp();
  }
  
  addItem(item:itemInterface){
    this.pedidoService.add(item);
    this.pedido = this.pedidoService.get();
  }
}

