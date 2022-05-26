import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { BudgetService } from './../budget.service';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category.model';
import { Budget } from './../budget.model';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
export class BudgetCreateComponent implements OnInit {
  budget!: Budget;
  categories!: Category[];

  constructor(
    private budgetService: BudgetService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toast: ToastrService,
  ) { }

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    value: [0, [Validators.required, Validators.min(1)]],
    category_id: ['', Validators.required],
  })

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories) => {
      this.categories = categories;
    });
  }

  create(): void {
    console.log(this.form.value);

    this.budgetService.store(this.form.value).subscribe(() => {
      this.toast.success('Successfully created');
      this.router.navigate(['/budgets']);
    });
  }

  changeCategory(e: any) {
    this.form.get('category')?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
}
