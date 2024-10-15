import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-bindings',
  templateUrl: './demo-bindings.component.html',
  styleUrl: './demo-bindings.component.scss'
})
export class DemoBindingsComponent {

  formateur: string = 'soufiane';
  platDuJour: string = 'faux pates au poulet et legumes'
  plats: string[] = ["kebab","chevre", "etpuiszut"];

  genererPlat(): void{
    this.platDuJour = this.plats[Math.floor(Math.random()*this.plats.length)];
  }


  /*constructor(){
    this.formateur='souf';    donner une valeur si n'est pas déjà defini 
    }
    formateur!: 'soufiane'|'seb';   bloquer aver ces valeurs si 
    */

}
