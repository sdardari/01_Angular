import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToCelsiusPipe } from './pipes/to-celsius.pipe';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { TimerPipe } from './pipes/timer.pipe';
import { FormErrorComponent } from './components/form-error/form-error.component';



@NgModule({
  declarations: [
    ToCelsiusPipe,
    TemperaturePipe,
    TimerPipe,
    FormErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  exports:[FormsModule, 
    ToCelsiusPipe,
     TemperaturePipe,
      TimerPipe,
    ReactiveFormsModule,
    FormErrorComponent]
})
export class SharedModule { }
