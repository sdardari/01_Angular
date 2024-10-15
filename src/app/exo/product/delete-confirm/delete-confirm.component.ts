import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrl: './delete-confirm.component.scss'
})
export class DeleteConfirmComponent {


  @Input({required: true })
  product!: ProductModel;

  @Output()
  confirmEvent = new EventEmitter<boolean>();

  confirm(wantToDelete: boolean){
    this.confirmEvent.emit(wantToDelete);
  }
}
