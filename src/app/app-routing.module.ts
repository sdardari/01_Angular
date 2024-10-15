import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DemoComponent } from './demo/demo.component';
import { ExoComponent } from './exo/exo.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {
    path: 'demo',
    component: DemoComponent,
    loadChildren:()=> import('./demo/demo.module').then(m => m.DemoModule)
  }//loader tout les contenus de demo.module
  ,
  {
    path:'exo',
    component: ExoComponent,
    loadChildren:()=> import ('./exo/exo.module').then(m=>m.ExoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
