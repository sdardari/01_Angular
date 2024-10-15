import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[] = [
    { id: 1, name: 'Pommes', quantity: 10 },
    { id: 2, name: 'Bananes', quantity: 20 },
  ];

  getProducts(){
    return this.products;
  }

  getById(id: number): ProductModel | null{
    let product : ProductModel | undefined = this.products.find(product=> product.id === id);
    return product ? product : null;
  }

  addProduct(newProduct: ProductModel) {
    this.products.push(newProduct);
  }

  // Supprimer un produit de la liste
  deleteProduct(id: number) {
    let product: ProductModel | null = this.getById(id);
    if (product){
      this.products.splice(this.products.indexOf(product), 1);
    }
  }
}