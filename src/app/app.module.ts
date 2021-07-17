import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { MesaComponent } from './templates/mesa/mesa.component';
import { CocinaComponent } from './templates/cocina/cocina.component';
import { OrderComponent } from './components/order/order.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { HamburguesaComponent } from './components/forms/hamburguesa/hamburguesa.component';
import { ClienteComponent } from './components/forms/cliente/cliente.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { InicialComponent } from './components/estados-mesa/inicial/inicial.component';
import { OrdenComponent } from './components/estados-mesa/orden/orden.component';
import { ComandaComponent } from './components/comanda/comanda.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MesaComponent,
    CocinaComponent,
    OrderComponent,
    ButtonPrimaryComponent,
    HeaderComponent,
    MenuComponent,
    HamburguesaComponent,
    ClienteComponent,
    PopUpComponent,
    InicialComponent,
    OrdenComponent,
    ComandaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
