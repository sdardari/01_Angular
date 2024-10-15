import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor (){
    console.log("On constructor");
  }
  ngOnDestroy(): void {
    console.log("on init ");
  }
  ngOnInit(): void {
    console.log("on destroy ");

  }
  
}
