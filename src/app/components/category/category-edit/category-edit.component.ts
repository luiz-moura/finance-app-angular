import { FormBuilder, Validators } from '@angular/forms';
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
    private toast: ToastrService,
    private formBuilder: FormBuilder
  ) { }

  form = this.formBuilder.group({
    id: [],
    name: ['', [Validators.required, Validators.minLength(3)]],
    background: ['#fff', Validators.required],
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;

      this.form.get('id')?.setValue(category.id);
      this.form.get('name')?.setValue(category.name);
      this.form.get('background')?.setValue(category.background);
    });
  }

  update(): void {
    this.categoryService.update(this.form.value).subscribe(() => {
      this.toast.success('Successfully edited');
      this.router.navigate(['/categories']);
    });
  }
}
