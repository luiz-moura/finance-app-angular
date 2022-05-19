
import { Category } from './category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'https://localhost:8000/api'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/category`);
  }

  store(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/category`, category);
  }

  update(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/category/${category.id}`, category);
  }

  readById(id: Number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/category/${id}`);
  }

  delete(category: Category): Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}/category/${category.id}`);
  }
}
