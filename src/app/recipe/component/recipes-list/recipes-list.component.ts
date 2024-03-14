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
  value: number = 0; // Difficulty level filter value
  value1: number = 0; // Preparation time filter value
  selectedCategories: number[] = []; // Selected categories for filtering
  sidebarVisible2: boolean = false;
  disabled = false;
  max = 5;
  min = 0;
  showTicks = true;
  step = 0;
  thumbLabel = true;
  recipeNameFilter: string = '';

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
  filterByName(): void {
    this.filterRecipes();
  }

  filterRecipes(): void {
    this.filteredRecipes = this.recipes.filter(recipe => {
      const timeFilter = this.value1 === 0 || recipe.preparationTimeInMinutes <= this.value1;
      const difficultyFilter = this.value === 0 || recipe.difficultyLevel === this.value;
      const categoryFilter = this.selectedCategories.length === 0 || this.selectedCategories.includes(recipe.categoryCode);
      const nameFilter = this.recipeNameFilter === '' || recipe.recipeName.toLowerCase().includes(this.recipeNameFilter.toLowerCase());
      return timeFilter && difficultyFilter && categoryFilter && nameFilter;
    });
  }
  // Function to filter recipes based on preparation time
  filterByTime(v: number): void {
    this.value1 = v;
    this.filterRecipes();
  }

  // Function to filter recipes based on difficulty level
  filterByDifficulty(v: number): void {
    this.value = v;
    this.filterRecipes();
  }

  // Function to filter recipes based on selected categories
  filterByCategory(category: number): void {
    const index = this.selectedCategories.indexOf(category);
    if (index !== -1) {
      this.selectedCategories.splice(index, 1);
    } else {
      this.selectedCategories.push(category);
    }
    this.filterRecipes();
  }


}
