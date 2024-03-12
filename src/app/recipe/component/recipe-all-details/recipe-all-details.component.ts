import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../category.model';
import { User } from '../../../user.model';
import { CategoryServiceService } from '../../../category-service.service';
import { UserServiceService } from '../../../user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-all-details',
  templateUrl: './recipe-all-details.component.html',
  styleUrls: ['./recipe-all-details.component.css']
})
export class RecipeAllDetailsComponent implements OnInit {
  recipe!: Recipe;
  category!: Category;
  user!: User;
  index!: number | any;
  isLiked: boolean = false;
  currentUserCode: number | null = null; // Current user's code from storage

  constructor(
    private recipeService: RecipeServiceService,
    private categoryService: CategoryServiceService,
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.queryParamMap.get('index');
    console.log("index", this.index);

    // Fetch current user code from storage
    this.currentUserCode = sessionStorage.getItem('userCode') ? JSON.parse(sessionStorage.getItem('userCode')!) : null;

    this.recipeService.getRecipeById(this.index).subscribe({
      next: (res) => {
        this.recipe = res;

        // Fetch category details
        this.categoryService.getCategoryByCode(this.recipe.categoryCode).subscribe({
          next: (category) => {
            this.category = category;
            console.log("catefory",category)
          },
          error: (err) => {
            console.log(err);
          }
        });

        // Fetch user details
        this.userService.getUserById(this.recipe.userCode).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (err) => {
            console.log(err);
          }
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getDifficultyIcons(difficultyLevel: number): number[] {
    return Array(difficultyLevel).fill(0);
  }

  toggleLike() {
    this.isLiked = !this.isLiked;
    setTimeout(() => {
      this.isLiked = false;
    }, 1000); // Adjust the timing to your preference
  }


  isCurrentUserRecipeOwner(): boolean {
    // בדיקה אם המשתמש הנוכחי קיים בזיכרון והוא הוא המשתמש שערך את המתכון
    return this.currentUserCode !== null && this.currentUserCode === this.recipe.userCode;
} 


deleteRecipe() {
    if (this.currentUserCode !== null && this.currentUserCode === this.recipe.userCode) {
      Swal.fire({
        title: 'האם הינך בטוח שברצונך למחוק את המתכון?',
        text: "לא תהיה אפשרות לבטל את הפעולה פעם שהיא נעשתה",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'כן, מחק את המתכון'
      }).then((result) => {
        if (result.isConfirmed) {
          // ביצוע פעולת המחיקה כאן
          this.recipeService.deleteRecipe(this.recipe.recipeCode).subscribe({
            next: () => {
              Swal.fire(
                'נמחק!',
                'המתכון נמחק בהצלחה.',
                'success'
              );
              // הפניה לרשימת המתכונים
              this.router.navigate(['/recipe']);
            },
            error: (err) => {
              console.log(err);
              Swal.fire(
                'שגיאה!',
                'אירעה שגיאה במחיקת המתכון.',
                'error'
              );
            }
          });
        }
      });
    } else {
      // אם המשתמש הנוכחי אינו היוצר של המתכון, הצג הודעה שהוא אינו מורשה לבצע מחיקה
      Swal.fire(
        'המשתמש אינו מורשה',
        'רק היוצר של המתכון יכול לבצע מחיקה.',
        'error'
      );
    }
  }

}
