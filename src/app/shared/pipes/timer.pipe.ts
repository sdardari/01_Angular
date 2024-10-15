import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(seconds: number): string{
    const hrs= Math.floor(seconds/3600);
    const min= Math.floor((seconds%3600)/60);
    const secs= seconds%60;
    return(
      (hrs<10 ? '0' : '')+ hrs+':'+
      (min<10 ? '0' : '')+ min+':'+
      (min<10 ? '0' : '')+ secs
    );
  }

}
