import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <div class="well" id="animalsNew">
    <h2>Add a New Animal to our Zoo!</h2>
    <h4>Please enter the following information to add an animal to our system<h4>
    <hr>
    <div>
      <label>Image Link for Animal:</label>
      <input class="newAnimalInput" #newImage>
    <div>
     <label>Enter Animal Species:</label>
     <input class="newAnimalInput" #animalSpecies>
    </div>
    <div>
      <label>Enter Animal Name:</label>
      <input class="newAnimalInput" #name>
    </div>
    <div>
      <label>Enter Animal Age:</label>
      <input class="newAnimalInput" #age type="number" >
    </div>
    <div>
      <label>Enter Animals diet:</label>
      <input class="newAnimalInput" #diet >
    </div>
    <div>
      <label>Enter Animals location:</label>
      <input class="newAnimalInput" #location >
    </div>
    <div>
      <label>Number of Caretakers:</label>
      <input class="newAnimalInput" #caretakers type="number">
    </div>
    <div>
    <label>Select Animals gender</label>
      <select class="newAnimalInput" #gender (change)="onChange($event.target.value)">
         <option value="" selected disabled>Select Gender</option>
         <option value="female" >Female</option>
         <option value="male">Male</option>
      </select>
      </div>
      <div>
        <label>Enter animals likes:</label>
        <input class="newAnimalInput" #like >
      </div>
      <div>
        <label>Enter animals dislikes:</label>
        <input class="newAnimalInput" #dislike >
      </div>


        <a href="#head"><button class="btn new" (click)="submitForm(newImage.value, animalSpecies.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, like.value, dislike.value); newImage.value =''; animalSpecies.value = ''; name.value = ''; age.value = ''; diet.value =''; location.value =''; caretakers.value = ''; gender.value = ''; like.value = ''; dislike.value = '';">Create Animal!</button></a>
    </div>
  `
})

export class newAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(img: string, animalSpecies: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, like: string, dislike: string){
  var newAnimalToAdd: Animal = new Animal(img, animalSpecies, name, age, diet, location, caretakers, gender, like, dislike);
  this.newAnimalSender.emit(newAnimalToAdd);
}
}
