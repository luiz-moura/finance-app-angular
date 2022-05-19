import { Category } from './../category.model';
import { CategoryService } from './../category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
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

  update(): void {
    this.categoryService.update(this.category).subscribe(() => {
      this.router.navigate(['/categories']);
    });
  }

}
