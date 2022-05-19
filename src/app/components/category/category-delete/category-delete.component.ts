import { Category } from './../category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  category!: Category ;

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

  delete(): void {
    this.categoryService.delete(this.category).subscribe(() => {
      this.toast.success('Successfully deleted');
      this.router.navigate(['/categories']);
    });
  }
}
