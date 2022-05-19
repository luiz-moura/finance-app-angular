import { Transaction } from './../transaction.model';
import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  transaction!: Transaction;

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  create(): void {
    this.transactionService.store(this.transaction).subscribe(() => {
      this.toastr.success('Successfully created');
      this.router.navigate(['transactions'])
    });
  }
}
