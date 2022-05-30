import { Transaction } from './transaction.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'https://localhost:8000';

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/api/transaction`);
  }

  store(transaction: FormData): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/api/transaction`, transaction);
  }

  update(id: number, transaction: FormData): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/api/transaction/${id}`, transaction);
  }

  readById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/api/transaction/${id}`);
  }

  delete(transaction: Transaction): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.baseUrl}/api/transaction/${transaction.id}`);
  }
}
