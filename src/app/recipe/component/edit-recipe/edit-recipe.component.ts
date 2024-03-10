import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from '../../../category.model';
import { CategoryServiceService } from '../../../category-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;
  categories: Category[] = []; // רשימת הקטגוריות
  timerInterval
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServiceService,
    private formBuilder: FormBuilder,
    private categoryService:CategoryServiceService,
    private router:Router
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
    Swal.fire({
      title: 'האם אתה בטוח?',
      text: 'האם ברצונך לשמור את השינויים?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'כן, שמור שינויים',
      cancelButtonText: 'לא, בטל',
      reverseButtons: true,
      confirmButtonColor: '#FF69B4',
      cancelButtonColor: '#FFFFFF',
      background: '#FFFFFF'
    }).then((result) => {
      if (result.isConfirmed) {
        // המשתמש בחר לשמור את השינויים
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
              Swal.fire({
                title: 'המתכון עודכן בהצלחה!',
                text: 'המתכון עודכן בהצלחה',
                icon: 'success',
                timer: 2000,
                timerProgressBar: true,
                background: '#FFFFFF',
                iconColor: '#FF69B4'
              }).then(() => {
                this.router.navigate(['/recipe/recipes-list']); // Redirect to recipes list page
              });
            });
        } else {
          Swal.fire({
            title: 'שגיאה!',
            text: 'הטופס לא תקין',
            icon: 'error',
            confirmButtonColor: '#FF69B4',
            background: '#FFFFFF'
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // המשתמש בחר לבטל את הפעולה
      }
    });
  }
  
  
  
 }