import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from './../../category/category.service';
import { Category } from './../../category/category.model';
import { Transaction } from './../transaction.model';

@Component({
  selector: 'app-transaction-category-badge',
  templateUrl: './transaction-category-badge.component.html',
  styleUrls: ['./transaction-category-badge.component.css']
})
export class TransactionCategoryBadgeComponent implements OnInit, OnDestroy {
  constructor(
    private categoryService: CategoryService,
    private elementRef: ElementRef
  ) { }
  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  remove(): void {
    this.categoryService.removeCatagory(this.transaction, this.category).subscribe(() => {
      this.ngOnDestroy();
    });
  }

  @Input() category!: Category;
  @Input() transaction!: Transaction;
}
