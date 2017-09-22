import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div id="wrapper">
    <div class="container">
      <div id="head" class="well">
        <h1 class="welcome">Welcome to the Zoo!</h1>
        <h3 class="head">Checkout the animals that we have at our location below!</h3>
        <h4 class="head">To add a new animal to our system<a href="#newanimal"> Click Here</a></h4>
      <div>
      <div class="well">
        <animal-list [childAnimalList] ="masterAnimal" (clickSender)="editButtonClicked($event)"></animal-list>
      </div>
      <div id="edit-animal">
        <edit-animal [childSelectedAnimal] = "selectedAnimal" (editButtonClickedSender) = "finishedEditing()"></edit-animal>
      </div>
      <div id="newanimal">
        <new-animal (newAnimalSender)="newAnimal($event)"></new-animal>
      </div>
    </div>
  </div>
  `
})

export class AppComponent{

   selectedAnimal = null;
   masterAnimal: Animal[] = [
     new Animal('./resources/images/polar.jpg', 'Polar Bear', 'Polar', 4, 'Carnivore', 'Polar Cove', 5, 'Female', 'Having Ice Caps to rest on', 'Swimming Long Distances'),
     new Animal('./resources/images/koala.jpg', 'Koala', 'Sleepy', 2, 'Herbivore', 'Near the bears', 2, 'Male', 'Sleeping in trees and not being bothered', 'Being bothered')
    ];

  newAnimal(newAnimalFromChild: Animal){
    this.masterAnimal.push(newAnimalFromChild);
  }
  editButtonClicked(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }
  finishedEditing() {
    this.selectedAnimal = null;
  }
}
