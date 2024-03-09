
import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from '../../../recipe-service.service';
import { Recipe } from '../../../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  filteredRecipes: Recipe[] = [];
  filterOptions = {
    category: '',
    preparationTime: '',
    difficultyLevel: 1 // Default difficulty level
  };

  minValue: number = 1;
  maxValue: number = 8;
  value: number = 5;
  
  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getAllRecipe().subscribe(recipes => {
      this.recipes = recipes;
      this.filteredRecipes = [...recipes]; // Copy all recipes to filtered recipes initially
    });
  }

  // Function to filter recipes based on filter options
  filterRecipes(): void {
    this.filteredRecipes = this.recipes.filter(recipe => {
      let passDifficultyLevel = true;
  
      // Check if difficulty level filter is applied
      passDifficultyLevel = recipe.difficultyLevel >= this.minValue && recipe.difficultyLevel <= this.maxValue;
  
      // Return true if all filters pass
      return passDifficultyLevel;
    });
  }
}
