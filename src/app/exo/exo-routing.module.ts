import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductComponent } from './product/product.component';
import { FormulaireComponent } from './formulaire/formulaire.component';

const routes: Routes = [
  {path:'timer', component:TimerComponent  },
  {path: 'shopping',component: ShoppingComponent},
  {path:'product', component: ProductComponent},
  {path:'formulaire', component: FormulaireComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
