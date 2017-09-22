import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { newAnimalComponent } from './new-animal.component';
import { Sorting } from './Sorting.pipe';
import { EditAnimalComponent } from './edit-animal.component';
import { Diet } from './Diet.pipe';



@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, newAnimalComponent, AnimalListComponent, Sorting, EditAnimalComponent, Diet ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
