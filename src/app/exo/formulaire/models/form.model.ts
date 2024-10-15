export interface FormModel {

    firstname: string;
    lastname: string;
    reservationDate: Date;
    description: string;
    email: string;
    houseNumber: number;
      street: string,
      city: string;
      postalCode: number;
    
}



// Creer un formulaire de contact : 
// firstname,lastname,date du rdv (minimum une semaine apres la date du jour),description du la demande de rdv,email.
// Bonus : 
//    checkBox pour demander le rdv a domicile.
//    Si coché Ajouter au formulaire un formulaire d'adresse
//    (le tout doit etre valider bien entendu
//    on peut proposer plusieurs date de rdv