import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Transaction } from './../transaction.model';
import { TransactionService } from './../transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.css']
})
export class TransactionDeleteComponent implements OnInit {
  transaction!: Transaction;
  categories!: Category[];

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  form = this.formBuilder.group({
    id: [],
    title: ['', [Validators.required, Validators.minLength(3)]],
    value: [0, [Validators.min(1)]],
    type: ['', [Validators.required]],
    image: [''],
    categories: this.formBuilder.array([])
  });

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories) => {
      this.categories = categories;
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.readById(id).subscribe(transaction => {
      this.transaction = transaction;

      this.form.get('id')?.setValue(transaction.id);
      this.form.get('title')?.setValue(transaction.title);
      this.form.get('value')?.setValue(transaction.value);
      this.form.get('type')?.setValue(transaction.type);
      this.form.get('image')?.setValue(transaction.image);

      this.categories.forEach((category) => {
        category.checked = transaction.catkeys?.includes(category.id);
      });
    });
  }

  delete(): void {
    this.transactionService.delete(this.transaction).subscribe(() => {
      this.toastr.success('Successfully deleted');
      this.router.navigate(['transactions']);
    });
  }
}
