import { AbstractControl, ValidatorFn } from "@angular/forms";

export const weekAfterToday = (): ValidatorFn |null =>{

    return (control: AbstractControl) =>{
        
        if (!control.value){
            return null;
        }

        let dayOfReservation: Date = new Date(control.value)
        let now: Date= new Date();

        let minReservationDate: Date= new Date(now);
        minReservationDate.setDate(now.getDate()+7);

        if (dayOfReservation> minReservationDate){
            return null;
        }
        return{weekAfterToday: true}
    }
}