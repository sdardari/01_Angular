import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {

  timer: any= null;
  seconds: number= 0;
  displayTime: string = '00:00:00';

  startTimer(){
    if(!this.timer){
      this.timer= setInterval(()=>{
        this.seconds++;
      },1000); 
    }
  }  
  
  stopTimer(){
    if(this.timer){
      clearInterval(this.timer);
      this.timer= null;
    }
  }  
  
  resetTimer(){
    this.stopTimer();
    this.seconds = 0;
  }


}
