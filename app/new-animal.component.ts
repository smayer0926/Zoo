import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <form>
      <div>
       <label>Enter Animal Species:</label>
       <input #animalSpecies>
      </div>
      <div>
        <label>Enter Animal Name:</label>
        <input #name>
      </div>
      <div>
        <label>Enter Animal Age:</label>
        <input #age type="number" >
      </div>
      <div>
        <label>Enter Animals diet:</label>
        <input #diet >
      </div>
      <div>
        <label>Enter Animals location in the zoo:</label>
        <input #location >
      </div>
      <div>
        <label>Enter Number of Caretakers Required:</label>
        <input #caretakers type="number">
      </div>
      <div>
      <p>Select the gender</p>
        <select #gender (change)="onChange($event.target.value)">
           <option value="female" selected="selected">Female</option>
           <option value="male">Male</option>
        </select>
        </div>
        <div>
          <label>Enter a like of the animal:</label>
          <input #like >
        </div>
        <div>
          <label>Enter a dislike of the animal:</label>
          <input #dislike >
        </div>


      <button (click)="submitForm(animalSpecies.value, name.value, age.value, diet.value, location.value, caretakers.value, gender.value, like.value, dislike.value)">Create Animal!</button>
    </form>
  `
})

export class newAnimalComponent{
  @Output() newAnimalSender = new EventEmitter();

  submitForm(animalSpecies: string, name: string, age: number, diet: string, location: string, caretakers: number, gender: string, like: string, dislike: string){
  var newAnimalToAdd: Animal = new Animal(animalSpecies, name, age, diet, location, caretakers, gender, like, dislike);
  this.newAnimalSender.emit(newAnimalToAdd);
}
}
