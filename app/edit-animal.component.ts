import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">
      <div>
       <label>Edit Name:</label>
       <input [(ngModel)]="childSelectedAnimal.name" type="text">
      </div>
      <div>
        <label>Edit Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" type="number">
      </div>
      <div>
        <label>Edit Number of Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" type="number">
      </div>
      <a href="#head"><button class="btn" (click)="editButtonClicked()">Edit Animal!</button></a>
  </div>
  `
})

export class EditAnimalComponent{
  @Input() childSelectedAnimal: Animal;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}
