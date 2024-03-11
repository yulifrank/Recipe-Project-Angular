import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private apiUrl = 'https://localhost:7247/api/Category'; // URL של הנתיב לקטגוריות

  constructor(private http: HttpClient) { }

  // פונקציה לשליפת רשימת הקטגוריות מהשרת
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }

  // פונקציה להוספת קטגוריה חדשה לשרת
  addCategory(Category: Category): Observable<Category> {
    return this.http.post<Category>(this.apiUrl, Category);
  }

  // פונקציה לעדכון קטגוריה קיימת בשרת
  updateCategory(Category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.apiUrl}/${Category.code}`, Category);
  }

  // פונקציה למחיקת קטגוריה מהשרת
  deleteCategory(code: number): Observable<Category> {
    return this.http.delete<Category>(`${this.apiUrl}/${code}`);


    
  }
  
  getCategoryByCode(id: number): Observable<Category>
  {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
}
