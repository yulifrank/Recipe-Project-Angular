import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  private apiUrl = 'https://localhost:7247/api'; // URL של השרת



  // פונקציה לשליפת רשימת מתכונים מהשרת


  constructor(private http: HttpClient) { }

  getAllRecipe(): Observable<Recipe[]> {
    console.log("get all",this.http.get<Recipe[]>(`${this.apiUrl}/Recipe`))
    return this.http.get<Recipe[]>(`${this.apiUrl}/Recipe`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/Recipe/${id}`);
  }

  // פונקציה ליצירת מתכון חדש בשרת
  addRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/Recipe`,recipe);
  }



  // פונקציה לעדכון מתכון קיים בשרת
  updateRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/Recipe/${recipe.recipeCode}`, recipe);
  }

  // פונקציה למחיקת מתכון מהשרת
  deleteRecipe(RecipeCode: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.apiUrl}/Recipe/${RecipeCode}`);
  }
 
}
