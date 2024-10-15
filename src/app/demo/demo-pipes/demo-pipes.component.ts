import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-pipes',
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.scss'
})
export class DemoPipesComponent {

  myString: string = "Hello world";

  myNumber: number = 52.97864578465231;

  now: Date = new Date;
}
