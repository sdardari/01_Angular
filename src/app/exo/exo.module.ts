import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { TimerComponent } from './timer/timer.component';
import { ExoComponent } from './exo.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingEventComponent } from './shopping/shopping-event/shopping-event.component';
import { ProductComponent } from './product/product.component';
import { DeleteConfirmComponent } from './product/delete-confirm/delete-confirm.component';
import { FormulaireComponent } from './formulaire/formulaire.component';



@NgModule({
  declarations: [
    TimerComponent,
    ExoComponent,
    ShoppingComponent,
    ShoppingEventComponent,
    ProductComponent,
    DeleteConfirmComponent,
    FormulaireComponent,
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
