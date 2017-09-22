import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div id="animalList">
      <h3>All animals that we currently have are listed below</h3>
      <h5>To see the details on <em><strong>young</strong></em> or <em><strong>older</strong></em> animals, select an option below:</h5>
      <select (change)="onChange($event.target.value)">
        <option value="allAnimals" select="selected">All Animals</option>
        <option value = "lessThan2"> Animals Younger than 2</option>
        <option value = "greaterThan2"> Animals Older than 2</option>
      </select>
    </div>
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
         <a href="#editAnimal"><button class="btn" (click)="editButtonHasBeenClicked(currentAnimal)">Edit
         {{currentAnimal.animalSpecies}}</button></a>
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
