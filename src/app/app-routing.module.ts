import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinhaDetalhesComponent } from './linha-detalhes/linha-detalhes.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'linha/:id', component: LinhaDetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
