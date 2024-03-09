
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../../../category-service.service';
import { Category } from '../../../category.model';
import { HttpClient } from '@angular/common/http';
import { RecipeServiceService } from '../../../recipe-service.service';
import { Recipe } from '../../../recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup ;
  categories: Category[] = []; // רשימת הקטגוריות
  showRotatingIcon=false


  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private categoryService: CategoryServiceService ,// שימוש בשירות הקטגוריות
    private recipeService: RecipeServiceService
  ) {}  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('username') && sessionStorage.getItem('password');
    if (!isLoggedIn) {
      {
        this.showRotatingIcon = true; // הצגת האייקון המסתובב

        setTimeout(() => {
          this.router.navigate(['/login']);

        }, 2000); // אם רוצים שהאנימציה תמשך שתי שניות
      }

    }

    this.initForm();
    this.loadCategories(); // טעינת רשימת הקטגוריות בזמן האתחול

  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      categoryCode: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
      preparationSteps: this.formBuilder.array([]),
      userCode: ['3', Validators.required],
      imageRoute: ['../../../../assets/images/recipe-images/Lavender-macaron-7.jpg', Validators.required]
    });
  }
  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
}
get preparationStepsArray(): FormArray {
  return this.recipeForm.get('preparationSteps') as FormArray;
}

addIngredients(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(this.formBuilder.control(''));
  }

  removeIngredients(index: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(index);
  }

  addStep(): void {
    (this.recipeForm.get('preparationSteps') as FormArray).push(this.formBuilder.control(''));
  }

  removeStep(index: number): void {
    (this.recipeForm.get('preparationSteps') as FormArray).removeAt(index);
  }

  addRecipe(): void {
    if (this.recipeForm.valid) {
      // הגדרת המתכון מהטופס
      const userCode:any = sessionStorage.getItem('userCode');
      let userCodeNumber = parseInt(userCode);
      console.log("usercode---",userCodeNumber)


      const newRecipe: Recipe = {
        recipeCode: 0, 
        recipeName: this.recipeForm.value.recipeName,
        categoryCode: this.recipeForm.value.category,
        preparationTimeInMinutes: this.recipeForm.value.preparationTime,
        difficultyLevel: this.recipeForm.value.difficultyLevel,
        dateAdded: new Date(), 
        ingredients: this.recipeForm.value.ingredients,
        preparationSteps: this.recipeForm.value.preparationSteps,
        userCode: userCodeNumber, 
        imageRoute: this.recipeForm.value.imageRoute
      };
  
      // ביצוע בקשת POST לשרת
      this.recipeService.addRecipe(newRecipe).subscribe(
        () => {
          alert('The recipe was successfully added');
          this.router.navigate(['/recipe/recipes-list']);
        },
        (error) => {
          console.error('Error adding recipe:', error);
          alert('Error adding recipe');
        }
      );
    } else {
      alert('Please fill in all fields');
    }
  }

  
}