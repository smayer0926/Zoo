import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="well" id="edit" *ngIf="childSelectedAnimal">
    <h4>{{childSelectedAnimal.name}}</h4>
      <hr>
      <div>
       <label>Edit Animal Species:</label>
       <input [(ngModel)]="childSelectedAnimal.animalSpecies" class="newAnimalInput" type="text">
      </div>
      <div>
       <label>Edit Animal Name:</label>
       <input [(ngModel)]="childSelectedAnimal.name" class="newAnimalInput" type="text">
      </div>
      <div>
        <label>Edit Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" class="newAnimalInput" type="number">
      </div>
      <div>
       <label>Edit Animal Location:</label>
       <input [(ngModel)]="childSelectedAnimal.location" class="newAnimalInput" type="text">
      </div>
      <div>
        <label>Edit Number of Caretakers:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers" class="newAnimalInput" type="number">
      </div>
      <div>
      <label>Select Animals gender</label>
        <select class="newAnimalInput" [(ngModel)]="childSelectedAnimal.gender" (change)="onChange($event.target.value)">
           <option value="" selected disabled>Select Gender</option>
           <option value="female" >Female</option>
           <option value="male">Male</option>
        </select>
        </div>
        <div>
          <label>Edit Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.like" class="newAnimalInput" type="text">
        </div>
        <div>
          <label>Edit Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislike" class="newAnimalInput" type="text">
        </div>
      <a href="#head"><button class="btn" (click)="editButtonClicked()">Done!</button></a>
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
