import { Component, OnInit, HostBinding } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import menuData from 'src/app/services/menu.json';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.scss']
})
export class MesaComponent  {
  menu:any = menuData;
  tipo:string = 'principal';
  @HostBinding('class') componentCssClass:string = 'dark-theme';

  btnNewOrder:string = 'NUEVO PEDIDO';
  btnEditOrder:string = 'EDITAR PEDIDO';

  constructor( private ThemeService: ThemeService) 
  {  }

  ngOnInit(): void {
    this.ThemeService.changeClass.subscribe(componentClass => {
      this.componentCssClass=componentClass;
    })
      
    }

  getActivo(): any{
    return this.menu[this.tipo]
  }

  switchMenu(): void{
    this.tipo = this.tipo === 'principal' ? this.tipo = 'desayunos' : this.tipo = 'principal';
  }

  public onThemeChange(e:string){
    this.componentCssClass = e;
  } 

}
