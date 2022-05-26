import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from './../../category/category.service';
import { BudgetService } from './../budget.service';
import { Category } from './../../category/category.model';
import { Budget } from './../budget.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-edit',
  templateUrl: './budget-edit.component.html',
  styleUrls: ['./budget-edit.component.css']
})
export class BudgetEditComponent implements OnInit {
  budget!: Budget;
  categories!: Category[];

  constructor(
    private budgetService: BudgetService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService,
  ) { }

  form = this.formBuilder.group({
    id: [],
    name: ['', [Validators.required, Validators.minLength(3)]],
    value: [0, [Validators.required, Validators.min(1)]],
    category_id: ['', Validators.required],
  })

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories) => {
      this.categories = categories;
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.budgetService.readById(id).subscribe(budget => {
      this.form.get('id')?.setValue(budget.id);
      this.form.get('name')?.setValue(budget.name);
      this.form.get('value')?.setValue(budget.value);
      this.form.get('category_id')?.setValue(budget.category_id);
    });
  }

  update(): void {
    this.budgetService.update(this.form.value).subscribe(() => {
      this.toast.success('Successfully updated');
      this.router.navigate(['/budgets']);
    });
  }

  changeCategory(e: any) {
    this.form.get('category')?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
}
