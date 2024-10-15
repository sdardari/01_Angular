import { Component } from '@angular/core';
import { ProductModel } from '../../demo/demo-directives/models/product.model';
import { ShopModel } from './models/shop.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss'
})
export class ShoppingComponent {

  products: ShopModel[] = [ 
    {id: 1, name: 'Mangues', quantity: 1},
    {id: 2, name: 'cerises', quantity: 2},
    {id: 3, name: 'fraises', quantity: 2}
  ];

  selectedProducts?: ShopModel;

  setSelectedProducts (product: ShopModel):void{
    this.selectedProducts = product;
  }


  reactToEvent(add:boolean, selectedProducts:{quantity:number}){
    
  }}
  
