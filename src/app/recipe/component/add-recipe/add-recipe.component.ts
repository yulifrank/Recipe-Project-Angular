
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  recipeForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('username') && sessionStorage.getItem('password');
    if (!isLoggedIn) {
      this.router.navigate(['/login']);
    }

    this.initForm();
  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      recipeName: ['', Validators.required],
      category: ['', Validators.required],
      preparationTime: ['', Validators.required],
      difficultyLevel: ['', Validators.required],
      ingredients: this.formBuilder.array([]),
      preparationSteps: this.formBuilder.array([]),
      userCode: ['3', Validators.required],
      imageRoute: ['../../../../assets/images/recipe-images/Lavender-macaron-7.jpg', Validators.required]
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
      this.logAllFormValues(this.recipeForm);
      alert('The recipe was successfully added');
      this.router.navigate(['/recipe/recipes-list']);
    } else {
      alert('Please fill in all fields');
    }
  }
  logAllFormValues(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormControl) {
        console.log(`${key}: ${control.value}`);
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.logAllFormValues(control as FormGroup); // Recursive call for nested form groups or form arrays
      }
    });
  }
}