import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from './../transaction.service';
import { Transaction } from './../transaction.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  transaction!: Transaction;

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.transactionService.readById(id).subscribe(transaction => {
      this.transaction = transaction
    });
  }

  update(): void {
    this.transactionService.update(this.transaction).subscribe(() => {
      this.toastr.success('Successfully edited');
      this.router.navigate(['transactions']);
    });
  }
}
