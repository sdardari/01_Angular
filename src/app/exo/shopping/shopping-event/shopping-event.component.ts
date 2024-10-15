import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShopModel } from '../models/shop.model';

@Component({
  selector: 'app-shopping-event',
  templateUrl: './shopping-event.component.html',
  styleUrl: './shopping-event.component.scss'
})
export class ShoppingEventComponent {



  @Input()
  product!: ShopModel; // le produit a modier

  @Output()
  confirmEvent =new EventEmitter<boolean>();  // emet la confirmation de l'event 


  increase(){
    this.product.quantity++;
    this.confirmEvent.emit(true);
  }

  decrease(){
    if(this.product.quantity>1){
      this.product.quantity--;
      this.confirmEvent.emit(false);
    }else{
      this.confirmEvent.emit(false);
    }

  }
}
