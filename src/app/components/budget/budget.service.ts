import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from './budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  baseUrl = 'https://localhost:8000/api'

  constructor(private http: HttpClient) { }

  list(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.baseUrl}/budget`);
  }

  store(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(`${this.baseUrl}/budget`, budget);
  }

  update(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.baseUrl}/budget/${budget.id}`, budget);
  }

  readById(id: Number): Observable<Budget> {
    return this.http.get<Budget>(`${this.baseUrl}/budget/${id}`);
  }

  delete(budget: Budget): Observable<Budget> {
    return this.http.delete<Budget>(`${this.baseUrl}/budget/${budget.id}`);
  }
}
