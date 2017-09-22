import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Zoo</h1>
    <h3>{{currentFocus}}</h3>
    <new-animal (newAnimalSender)="newAnimal($event)"></new-animal>
    <animal-list [childAnimalList] ="masterAnimal"></animal-list>
  </div>
  `
})

export class AppComponent{
   currentFocus: string = 'Our Kegs';
   selectedKeg = null;
   masterAnimal: Animal[] = [
    ];

  newAnimal(newAnimalFromChild: Animal){
    this.masterAnimal.push(newAnimalFromChild);
  }
}
