import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../../recipe-service.service';
import { Recipe } from '../../../recipe.model';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getAllRecipe().subscribe(recipes => {
      this.recipes = recipes;
      console.log("recipes- ",this.recipes)

    });
  }
}