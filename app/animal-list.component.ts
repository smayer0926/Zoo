import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h4>All animals that we currently have are listed below</h4>
  <p>To see the details on <strong>young</strong> or <strong>older</strong> animals, select an option below:</p>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" select="selected">All Animals</option>
    <option value = "lessThan2"> Animals Younger than 2</option>
    <option value = "greaterThan2"> Animals Older than 2</option>
  </select>
     <ul>
      <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sorting:ageFilter">
      <hr>
        <h3 class="species">{{currentAnimal.animalSpecies}}</h3>
      <ul>
       <li><img class="image" src='{{currentAnimal.img}}' alt="picture of the animal"/></li>
       <li><span class="listOfAnimals">Name: </span>{{currentAnimal.name}}</li>
       <li><span class="listOfAnimals">Age: </span>{{currentAnimal.age}}</li>
       <li><span class="listOfAnimals">Diet: </span>{{currentAnimal.diet}}</li>
       <li><span class="listOfAnimals">Location: </span>{{currentAnimal.location}}</li> <li><span class="listOfAnimals">Caretakers: </span>{{currentAnimal.caretakers}}</li>
       <li><span class="listOfAnimals">Gender: </span>{{currentAnimal.gender}}</li>
       <li><span class="listOfAnimals">Animal Likes: </span>{{currentAnimal.like}}</li>
       <li><span class="listOfAnimals">Animal Dislikes: </span>{{currentAnimal.dislike}}</li>
       </ul>
         <button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit {{currentAnimal.species}}!</button>
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
  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }


}
