import { Component, Input, OnInit } from '@angular/core';
import menuData from 'src/app/services/menu.json';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.scss']
})
export class OrdenComponent implements OnInit {
  menu:any = menuData;
  tipo:string = 'principal';
  textoBoton: string = 'Desayuno';
  
  constructor() { }

  ngOnInit(): void {
  }

  getActivo(): any{
    return this.menu[this.tipo]
  }

  switchMenu(): void{
    this.tipo = this.tipo === 'principal' ? this.tipo = 'desayunos' : this.tipo = 'principal';
    this.textoBoton = this.textoBoton === 'Desayuno' ? this.textoBoton = 'Principal' : this.textoBoton = 'Desayuno';
    
  }
 
}
