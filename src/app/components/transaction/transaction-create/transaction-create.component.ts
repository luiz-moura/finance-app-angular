import { Transaction } from './../transaction.model';
import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transaction: Transaction = {
    title: '',
    type: 'deposit',
    value: 0,
  }

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  create(): void {
    console.log(this.transaction);

    this.transactionService.store(this.transaction).subscribe(() => {
      this.router.navigate(['transactions'])
    });
  }
}
