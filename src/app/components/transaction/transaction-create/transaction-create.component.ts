import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from './../../category/category.model';
import { TransactionService } from './../transaction.service';
import { CategoryService } from './../../category/category.service';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {
  imageURL!: string;
  categories!: Category[];

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    value: [0, Validators.min(1)],
    image: [''],
    type: ['withdraw'],
    categories: this.formBuilder.array([]),
  });

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  create(): void {
    this.transactionService.store(this.form.value).subscribe(() => {
      this.toastr.success('Successfully created');
      this.router.navigate(['transactions']);
    });
  }

  onFileSelect(event: any) {
    const files = event.target.files;

    if (files.length > 0) {
      const file = files[0];
      this.form.get('image')?.setValue(file);

       // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      reader.readAsDataURL(file);
    }
  }

  onChange(event: any) {
    const categories: FormArray = this.form.get('categories') as FormArray;

    if (event.target.checked) {
      categories.push(new FormControl(event.target.value));
    } else {
      const index = categories.controls.findIndex(x => x.value === event.target.value);
      categories.removeAt(index);
    }
  }
}
