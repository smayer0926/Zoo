import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Zoo</h1>
    <h3>{{currentFocus}}</h3>
    <new-animal (newAnimalSender)="newAnimal($event)"></new-animal>
    <animal-list [childAnimalList] ="masterAnimal" (clickSender)="editButtonClicked($event)"></animal-list>
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editButtonClickedSender) = "finishedEditing()"></edit-animal>
  </div>
  `
})

export class AppComponent{
   currentFocus: string = 'Our Kegs';
   selectedAnimal = null;
   masterAnimal: Animal[] = [
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
