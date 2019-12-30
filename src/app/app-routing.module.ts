import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactenosComponent } from './contactenos/contactenos.component';


const routes: Routes = [
  {path: 'home'   , component: HomeComponent},
  {path: 'contactenos'   , component: ContactenosComponent},
  {path: '**'   , component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
