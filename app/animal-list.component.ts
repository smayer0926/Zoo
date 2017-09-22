import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <div id="animalList">
      <h3>All animals that we currently have are listed below</h3>
      <h4>To see the details on <em>young (under 2)</em> or <em>older (above 2)</em> animals, select an option below:</h4>
      <select (change)="onChange($event.target.value)">
        <option value="" selected disabled>Select By Age</option>
        <option value="allAnimals">All Animals</option>
        <option value = "lessThan2"> Animals Younger than 2</option>
        <option value = "greaterThan2"> Animals Older than 2</option>
      </select>
      </div>
      <div id="food">
      <select (change)="onChange2($event.target.value)">
        <option value="" selected disabled>Select Based on Food Eaten</option>
        <option value = "Herbivore"> Herbivores</option>
        <option value = "Carnivore"> Carnivores</option>
        <option value = "Omnivore"> Omnivores</option>
        <option value="allAnimals">All Animals</option>
      </select>
    </div>
     <ul>
      <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sorting:ageFilter | diet:dietFilter">
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
         <a href="#editAnimal"><button class="btn" id="buttonControl" (click)="editButtonHasBeenClicked(currentAnimal)">Edit
         {{currentAnimal.name}}</button></a>
     </ul>

  `
})



export class AnimalListComponent{
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  ageFilter: string = "allAnimals";
  dietFilter: string ="allAnimals";

  onChange(optionFromZoo){
    this.ageFilter = optionFromZoo;
  }
  onChange2(optionOfZoo){
    this.dietFilter = optionOfZoo;
  }
  editButtonHasBeenClicked(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit);
  }


}
