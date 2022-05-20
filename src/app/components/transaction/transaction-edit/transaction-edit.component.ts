import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category.model';
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
  form: FormGroup;
  transaction!: Transaction;
  categories!: Category[];

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
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

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.readById(id).subscribe(transaction => {
      this.transaction = transaction;
      this.form.value.optCategories = transaction.catkeys;
    });
  }

  update(): void {
    this.transaction.categories = this.form.value.optCategories as Array<Number>;

    this.transactionService.update(this.transaction).subscribe(() => {
      this.toastr.success('Successfully edited');
      this.router.navigate(['transactions']);
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
