import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toast: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    background: ['#fff', Validators.required]
  });

  ngOnInit(): void { }

  create(): void {
    this.categoryService.store(this.form.value).subscribe(() => {
      this.toast.success('Successfully created');
      this.router.navigate(['/categories']);
    });
  }
}
