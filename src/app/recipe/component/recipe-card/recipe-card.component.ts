import { Component, Input } from '@angular/core';
import { Recipe } from '../../../recipe.model';
import { RecipeServiceService } from '../../../recipe-service.service';
import { UserServiceService } from '../../../user-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DurationPipe } from '../../duration-pipe.pipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

 recipe!: Recipe; 
  @Input() index !: number; // קבלת ה-index כקלט
  isLiked: boolean = false;
  createdByUserCode: number;
  createdByUsername: string;

  constructor(private router: Router,private recipeService: RecipeServiceService,private userService: UserServiceService) { }

  ngOnInit(): void {
    this.recipeService.getRecipeById(this.index).subscribe({
      next: (res) => {
        this.recipe = res;
        this.createdByUserCode = res.userCode;
        this.userService.getUserById(this.createdByUserCode).subscribe({
          next: (user) => {
            console.log("user",user)
            this.createdByUsername = user.name;
            console.log("createdByUsername",this.createdByUsername)
            console.log("createdByUserCode",this.createdByUserCode)


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
    }, 1000); 
  }
  editRecipe() {
    const userCode = sessionStorage.getItem('userCode'); // משיכת קוד המשתמש מהזיכרון המקומי
  console.log("createdByUserCode",this.createdByUserCode)
    if (userCode && +userCode === this.createdByUserCode) { // המרת הערך של userCode למספר ובדיקה האם זהו אותו משתמש שיצר את המתכון
      // אם זהו אותו משתמש, מעבירים אותו לדף העריכה
      this.router.navigate([`recipe/recipes-list/${this.index}/edit`]);
    } else {
      // אם זה לא אותו משתמש, מציגים הודעה כי אין הרשאה
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'אין הרשאה לעריכת המתכון.'
      });
    }
  }

  deleteRecipe(){
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
              this.router.navigate(['recipe']);
              // רענון הדף
              location.reload();
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
   
  }




  toAllDetails() {
    const username = sessionStorage.getItem('username'); // משיכת שם משתמש מהזיכרון המקומי
    const password = sessionStorage.getItem('password'); // משיכת סיסמה מהזיכרון המקומי
    const code = sessionStorage.getItem('userCode'); // משיכת סיסמה מהזיכרון המקומי

  console.log("code",code)
    if (username && password) {
      // כאן את צריכה לציין את הכתובת המלאה של הקומפוננטה לכתובת הנדרשת עם האינדקס
 
      this.router.navigate(['recipe/recipes-list', this.index], { queryParams: { index: this.index } });      } 
    else {
      console.log('Username or password not found in local storage.');
      Swal.fire({
        icon: 'error',
        title: 'לא מורשה',
        text: 'עליך להרשם כדי לראות את המתכון'
      });
      this.router.navigate(['user/login']);
    }
}
isCreatorUser(): boolean {
  const userCode = sessionStorage.getItem('userCode'); // Retrieve the user code from local storage
  console.log()
  return userCode && Number(userCode) === this.createdByUserCode;
}

}


