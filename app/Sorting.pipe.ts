import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "sorting",
  pure: false
})

export class Sorting implements PipeTransform{
  transform(input: Animal[], ageFilter){
    var output: Animal[] = [];
    if(ageFilter === "lessThan2"){
      for (var i = 0; i < input.length; i++){
        if(input[i].age <= 2){
          output.push(input[i])
        }
      } return output;
    } else if (ageFilter === "greaterThan2"){
      for(var i = 0; i < input.length; i++){
        if(input[i].age >= 3){
          output.push(input[i]);
        }
      }return output;
    }else {
      return input;
    }


  }
}
