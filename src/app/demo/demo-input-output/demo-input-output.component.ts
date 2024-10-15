import { Component } from '@angular/core';
import { ProductModel } from '../demo-directives/models/product.model';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss'
})
export class DemoInputOutputComponent {

  products: ProductModel[] = [ 
    {id: 1, name: 'Mangues', price: 42},
    {id: 2, name: 'cerises', price: 22},
    {id: 3, name: 'fraises', price: 12}
  ];
  
  selectedProducts?: ProductModel;

  setSelectedProducts(products: ProductModel): void {
    this.selectedProducts = products;
  }

  reactToConfirmDialog(wantToDelete: boolean): void{
    if(wantToDelete){
      let index = this.products.indexOf(this.selectedProducts!); // le ! pour lui dire qu'il aura une valuer sinon undefinded
      this.products.splice(index, 1);
    }
    this.selectedProducts= undefined;
  }
}
