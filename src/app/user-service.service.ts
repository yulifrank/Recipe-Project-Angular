import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = 'https://localhost:7247/api';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/User`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/User/${id}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/User`, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/User/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/User/${id}`);
  }
}
