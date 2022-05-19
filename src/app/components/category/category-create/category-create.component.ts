import { Category } from './../category.model';
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
  category!: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void { }

  create(): void {
    this.categoryService.store(this.category).subscribe(() => {
      this.toast.success('Successfully created');
      this.router.navigate(['/categories']);
    });
  }
}
