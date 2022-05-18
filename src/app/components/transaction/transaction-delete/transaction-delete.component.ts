import { Transaction } from './../transaction.model';
import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {
  transaction: Transaction = {
    title: '',
    value: 0,
    type: 'withdraw'
  }

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.transactionService.readById(id).subscribe(transaction => {
      this.transaction = transaction;
    });
  }

  delete(): void {
    this.transactionService.delete(this.transaction).subscribe(() => {
      this.router.navigate(['transactions']);
    });
  }
}