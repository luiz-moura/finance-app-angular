import { Category } from './../category.model';
import { Router } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {
  category: Category = {
    name: '',
    background: ''
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  create(): void {
    this.categoryService.store(this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}