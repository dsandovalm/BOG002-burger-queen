import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CocinaComponent } from './templates/cocina/cocina.component';
import { InicioComponent } from './templates/inicio/inicio.component';
import { MesaComponent } from './templates/mesa/mesa.component';

const routes: Routes = [
  {path:'', component: InicioComponent},
  {path:'mesa', component: MesaComponent},
  {path:'cocina', component:CocinaComponent},
  {path:'**', pathMatch:'full', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
