import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecipeCardComponent } from './component/recipe-card/recipe-card.component';
import { RecipesListComponent } from './component/recipes-list/recipes-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatOption, MatOptionSelectionChange } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AddRecipeComponent } from './component/add-recipe/add-recipe.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeAllDetailsComponent } from './component/recipe-all-details/recipe-all-details.component';




@NgModule({
  declarations: [RecipesListComponent,RecipeCardComponent,AddRecipeComponent,RecipeAllDetailsComponent],
  imports: [
    CommonModule, RecipeRoutingModule,MatCardModule, MatSelectModule,MatButtonModule,MatIconModule,MatFormField,    MatInputModule,
    MatFormFieldModule,MatOption,MatInputModule,   ReactiveFormsModule,


  ],
  exports: [   CommonModule,RecipeRoutingModule]


})
export class RecipeModule { }





