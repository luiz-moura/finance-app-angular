import { Category } from './../category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category: Category = {
    name: '',
    background: ''
  }

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;
    });
  }

  delete(): void {
    this.categoryService.delete(this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }
}
