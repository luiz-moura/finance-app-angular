
import { Transaction } from './transaction.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  baseUrl = 'https://localhost:8000/api'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transaction`);
  }

  store(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.baseUrl}/transaction`, transaction);
  }

  update(transaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.baseUrl}/transaction/${transaction.id}`, transaction);
  }

  readById(id: Number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/transaction/${id}`);
  }

  delete(transaction: Transaction): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.baseUrl}/transaction/${transaction.id}`);
  }
}
