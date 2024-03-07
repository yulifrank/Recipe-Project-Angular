import { Component, Input } from '@angular/core';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
 recipe!: Recipe; 
  @Input() index !: number; // קבלת ה-index כקלט
  isLiked: boolean = false;
  createdByUserCode!: number;



  constructor(private router: Router,private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
    this.recipeService.getRecipeById(this.index).subscribe({
      next: (res) => {
        this.recipe = res;
        this.createdByUserCode = res.userCode; // השמת הקוד של המשתמש שיצר את המתכון
      },
      error: (err) => {
        console.log(err);
      }
    })
    
  }
  getDifficultyIcons(difficultyLevel: number): number[] {
    return Array(difficultyLevel).fill(0);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    setTimeout(() => {
      this.isLiked = false;
    }, 1000); 
  }


  editRecipe() {
    const userCode = sessionStorage.getItem('userCode'); // משיכת קוד המשתמש מהזיכרון המקומי
  
    if (userCode && +userCode === this.createdByUserCode) { // המרת הערך של userCode למספר ובדיקה האם זהו אותו משתמש שיצר את המתכון
      // אם זהו אותו משתמש, מעבירים אותו לדף העריכה
      this.router.navigate(['/recipe/edit', this.index]);
    } else {
      // אם זה לא אותו משתמש, מציגים הודעה כי אין הרשאה
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'אין הרשאה לעריכת המתכון.'
      });
    }
  }
  
  

  toAllDetails() {
    const username = sessionStorage.getItem('username'); // משיכת שם משתמש מהזיכרון המקומי
    const password = sessionStorage.getItem('password'); // משיכת סיסמה מהזיכרון המקומי
  
    if (username && password) {
      // כאן את צריכה לציין את הכתובת המלאה של הקומפוננטה לכתובת הנדרשת עם האינדקס
 
      this.router.navigate(['recipe/recipes-list', this.index], { queryParams: { index: this.index } });      } 
    else {
      console.log('Username or password not found in local storage.');
      this.router.navigate(['../login']);
    }
}
}


