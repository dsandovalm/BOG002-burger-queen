import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocinaComponent } from './cocina/cocina.component';
import { HomeComponent } from './home/home.component';
import { MesaComponent } from './mesa/mesa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mesa', component: MesaComponent },
  { path: 'cocina', component: CocinaComponent },
  { path: '**', pathMatch:'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(){
  }
}
