import { BudgetService } from './../budget.service';
import { Budget } from './../budget.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.css']
})
export class BudgetListComponent implements OnInit {
  budgets!: Budget[];

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.budgetService.list().subscribe((budgets) => {
      this.budgets = budgets;
    });
  }
}
