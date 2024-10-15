import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormModel } from './models/form.model';
import { weekAfterToday } from './validators/week-after-today';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss'
})
export class FormulaireComponent {

  personForm: FormGroup;
  isAdressVisible = false;

  constructor(
    private readonly _fb: FormBuilder
  ){
    this.personForm = this._fb.group({
      firstname: [null,[Validators.required, Validators.maxLength(10)]],
      lastname: [null,[Validators.required, Validators.maxLength(123)]],
      reservationDate: [null,[Validators.required, weekAfterToday()]],
      description: [null,[Validators.required, Validators.maxLength(500)]],
      email: [null,[Validators.required, Validators.email]],
      single: [false],
      houseNumber: [null, ],
      street: [null,],
      city: [null,],
      postalCode: [null,]
          })
  }

  submit(){
    this.personForm.markAllAsTouched();
    
    if(this.personForm.invalid){
      console.log('non valid');
      return;
    }
    console.log("valid")

    let person:FormModel = this.personForm.value;
  }

  onSingleChecked(): void{
    const signleChecked = this.personForm.get('single')?.value;

    this.isAdressVisible= signleChecked;

    if(signleChecked){
      this.personForm.get('houseNumber')?.setValidators([Validators.required,Validators.min(1), Validators.max(3)]);
      this.personForm.get('street')?.setValidators([Validators.required,Validators.maxLength(20)]);
      this.personForm.get('city')?.setValidators([Validators.required,Validators.maxLength(20)]);
      this.personForm.get('postalCode')?.setValidators([Validators.required,Validators.max(4)]);
    } else {
      this.personForm.get('houseNumber')?.clearValidators;
      this.personForm.get('street')?.clearValidators();
      this.personForm.get('city')?.clearValidators();
      this.personForm.get('postalCode')?.clearValidators();
    }

    // Update validation status for the form 
    this.personForm.get('houseNumber')?.updateValueAndValidity();
    this.personForm.get('street')?.updateValueAndValidity();
    this.personForm.get('city')?.updateValueAndValidity();
    this.personForm.get('postalCode')?.updateValueAndValidity();
  }
}
