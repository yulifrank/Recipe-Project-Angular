import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../category.model';
import { CategoryServiceService } from '../../../category-service.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;
  categories: Category[] = []; // רשימת הקטגוריות

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServiceService,
    private formBuilder: FormBuilder,
    private categoryService:CategoryServiceService
  ) { }

  ngOnInit(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTimeInMinutes: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: ['', Validators.required],
      preparationSteps: ['', Validators.required]
    });

    const recipeId = this.route.snapshot.paramMap.get('id');
    this.getRecipe(recipeId);
    this.loadCategories(); // טעינת רשימת הקטגוריות בזמן האתחול

  }

  getRecipe(id: string | any): void {
    this.recipeService.getRecipeById(id)
      .subscribe(recipe => {
        this.recipe = recipe;
        this.populateForm();
      });
  }
  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  populateForm(): void {
    this.recipeForm.setValue({
      recipeName: this.recipe.recipeName,
      categoryCode: this.recipe.categoryCode,
      preparationTimeInMinutes: this.recipe.preparationTimeInMinutes,
      difficultyLevel: this.recipe.difficultyLevel,
      ingredients: this.recipe.ingredients.join(', '), // assuming ingredients is an array
      preparationSteps: this.recipe.preparationSteps.join('\n') // assuming preparationSteps is an array
    });
  }

  saveChanges(): void {
    if (this.recipeForm.valid) {
      this.recipe = {
        ...this.recipe,
        recipeName: this.recipeForm.value.recipeName,
        categoryCode: this.recipeForm.value.categoryCode,
        preparationTimeInMinutes: this.recipeForm.value.preparationTimeInMinutes,
        difficultyLevel: this.recipeForm.value.difficultyLevel,
        ingredients: this.recipeForm.value.ingredients.split(','),
        preparationSteps: this.recipeForm.value.preparationSteps.split('\n')
      };

      this.recipeService.updateRecipe(this.recipe)
        .subscribe(() => {
         prompt('Recipe updated successfully');
        });
    } else {
      prompt('Form is invalid');
    }
  }
}
