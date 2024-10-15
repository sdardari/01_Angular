import { Component } from '@angular/core';
import { ProductModel } from './models/product.model';

@Component({
  selector: 'app-demo-directives',
  templateUrl: './demo-directives.component.html',
  styleUrl: './demo-directives.component.scss'
})
export class DemoDirectivesComponent {

  isConnected: boolean =false;

  now: Date= new Date; 

  isDayTime: boolean= true;
  
  //getter pour recupérer le jour de la date
  get day() {
    return this.now.getDay();
  }

  products: ProductModel[] = [ 
    {id: 1, name: 'Mangues', price: 42},
    {id: 2, name: 'cerises', price: 22},
    {id: 3, name: 'fraises', price: 12}

  ]

  togleIsConnected() :void{
    this.isConnected= !this.isConnected;
  }  
  
  togleIsDayTime() :void{
    this.isDayTime= !this.isDayTime;
  }


}
