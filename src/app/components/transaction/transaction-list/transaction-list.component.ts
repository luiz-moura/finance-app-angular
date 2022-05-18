import { TransactionService } from './../transaction.service';
import { Transaction } from './../transaction.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionService.list().subscribe(transactions => {
      this.transactions = transactions
    });
  }
}
