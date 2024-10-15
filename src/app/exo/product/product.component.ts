import { Component } from '@angular/core';
import { ProductModel } from './models/product.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  products: ProductModel[];
  productToDelete?: ProductModel;

  constructor(
    private readonly _productService: ProductService
  ) {
    this.products= this._productService.getProducts();
  }


  // une methode: defini quel est le produit a supprimer productToDelete
  setProductToDelete(product: ProductModel){
    this.productToDelete= product;
  }

  reactToConfirmDialog(wantToDelete:boolean){
    if(wantToDelete){
        this._productService.deleteProduct(this.productToDelete!.id);
      }
      this.productToDelete =undefined;
  }
  // va selectionner le produit puis réafficher à l'intériere de l'autre composant


  // pour ensuite le supprimer selon le retour de l'évènement 


  
}
