import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { MesaComponent } from './templates/mesa/mesa.component';
import { CocinaComponent } from './templates/cocina/cocina.component';
import { OrderComponent } from './components/order/order.component';
import { ButtonPrimaryComponent } from './components/button-primary/button-primary.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    MesaComponent,
    CocinaComponent,
    OrderComponent,
    ButtonPrimaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
