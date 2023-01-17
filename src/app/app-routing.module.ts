import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisChileComponent } from './views/pais-chile/pais-chile.component';
import { PaisPeruComponent } from './views/pais-peru/pais-peru.component';
import { PaisUruguayComponent } from './views/pais-uruguay/pais-uruguay.component';

const routes: Routes = [
  {path: '', component: PaisPeruComponent},
  {path: 'chile', component: PaisChileComponent},
  {path: 'uruguay', component: PaisUruguayComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
