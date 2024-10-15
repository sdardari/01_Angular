import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelsius'
})
export class ToCelsiusPipe implements PipeTransform {

  transform(value: number): string {
    return Math.round((value-32)*5/9)+' C°';
  }

}
