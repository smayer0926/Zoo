import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" select="selected">All Animals</option>
    <option value = "lessThan2"> Animals Younger than 2</option>
    <option value = "greaterThan2"> Animals Older than 2</option>
  </select>
     <ul>
       <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sorting:ageFilter ">  {{currentAnimal.animalSpecies}} <br>{{currentAnimal.name}} <br>{{currentAnimal.age}} <br> {{currentAnimal.diet}} <br> {{currentAnimal.diet}} {{currentAnimal.location}} <br> {{currentAnimal.caretakers}} <br> {{currentAnimal.gender}} <br> {{currentAnimal.like}} <br>{{currentAnimal.dislike}}
         <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
       </li>
     </ul>

  `
})



export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  ageFilter: string = "allAnimals";

  onChange(optionFromZoo){
    this.ageFilter = optionFromZoo;
  }


}
