import { FormArray, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from './../transaction.service';
import { Transaction } from './../transaction.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

interface ITransaction extends Omit<Transaction, 'id'> {
  id: number;
}

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.css']
})
export class TransactionEditComponent implements OnInit {
  transaction!: ITransaction;
  categories!: Category[];
  imageURL!: string;

  constructor(
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({
    id: [],
    title: ['', [Validators.required, Validators.minLength(3)]],
    value: [0, [Validators.min(1)]],
    type: ['', [Validators.required]],
    image: [''],
    categories: this.formBuilder.array([])
  });

  ngOnInit(): void {
    this.categoryService.list().subscribe((categories) => {
      this.categories = categories;
    });

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.transactionService.readById(id).subscribe(transaction => {
      this.transaction = transaction as ITransaction;

      this.form.get('id')?.setValue(transaction.id);
      this.form.get('title')?.setValue(transaction.title);
      this.form.get('value')?.setValue(transaction.value);
      this.form.get('type')?.setValue(transaction.type);

      if (transaction.image) {
        this.imageURL = `${this.transactionService.baseUrl}/${transaction.image_url}`;
      }

      this.categories.forEach((category) => {
        category.checked = transaction.catkeys?.includes(category.id);
      });
    });
  }

  update(): void {
    const formData = new FormData();
    formData.append('title', this.form.get('title')?.value);
    formData.append('value', this.form.get('value')?.value);
    formData.append('image', this.form.get('image')?.value);
    formData.append('type', this.form.get('type')?.value);
    formData.append('categories', this.form.get('categories')?.value);

    this.transactionService.update(this.transaction.id, formData).subscribe(() => {
      this.toastr.success('Successfully edited');
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
      reader.readAsDataURL(file)
    }
  }

  onChange(e: any) {
    const categories: FormArray = this.form.get('categories') as FormArray;

    if (e.target.checked) {
      categories.push(new FormControl(e.target.value));
    } else {
      const index = categories.controls.findIndex(x => x.value === e.target.value);
      categories.removeAt(index);
    }
  }
}
