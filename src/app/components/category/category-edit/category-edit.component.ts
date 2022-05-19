import { ToastrService } from 'ngx-toastr';
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
  category!: Category;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;
    });
  }

  update(): void {
    this.categoryService.update(this.category).subscribe(() => {
      this.toast.success('Successfully edited');
      this.router.navigate(['/categories']);
    });
  }
}
