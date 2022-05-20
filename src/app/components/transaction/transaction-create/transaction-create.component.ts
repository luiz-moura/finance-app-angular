import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from './../../category/category.model';
import { Transaction } from './../transaction.model';
import { TransactionService } from './../transaction.service';
import { CategoryService } from './../../category/category.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  form: FormGroup;
  categories!: Category[];
  transaction: Transaction = {
    title: '',
    value: 0,
    type: 'withdraw'
  };

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      optCategories: this.formBuilder.array([], [Validators.required])
    });
  }

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories) => {
      this.categories = categories;
    });
  }

  create(): void {
    this.transaction.categories = this.form.value.optCategories as Array<Number>;

    this.transactionService.store(this.transaction).subscribe(() => {
      this.toastr.success('Successfully created');
      this.router.navigate(['transactions'])
    });
  }

  onCheckboxChange(e: any) {
    const optCategories: FormArray = this.form.get('optCategories') as FormArray;

    if (e.target.checked) {
      optCategories.push(new FormControl(e.target.value));
    } else {
      const index = optCategories.controls.findIndex(x => x.value === e.target.value);
      optCategories.removeAt(index);
    }
  }
}
