import { BudgetEditComponent } from './components/budget/budget-edit/budget-edit.component';
import { BudgetCreateComponent } from './components/budget/budget-create/budget-create.component';
import { BudgetsComponent } from './views/budgets/budgets.component';
import { HomeComponent } from './views/home/home.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { TransactionDeleteComponent } from './components/transaction/transaction-delete/transaction-delete.component';
import { TransactionEditComponent } from './components/transaction/transaction-edit/transaction-edit.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create/transaction-create.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'transactions',
    component: TransactionsComponent
  },
  {
    path: 'transactions/create',
    component: TransactionCreateComponent
  },
  {
    path: 'transactions/edit/:id',
    component: TransactionEditComponent
  },
  {
    path: 'transactions/delete/:id',
    component: TransactionDeleteComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/edit/:id',
    component: CategoryEditComponent
  },
  {
    path: 'categories/delete/:id',
    component: CategoryDeleteComponent
  },
  {
    path: 'budgets',
    component: BudgetsComponent
  },
  {
    path: 'budgets/create',
    component: BudgetCreateComponent
  },
  {
    path: 'budgets/edit/:id',
    component: BudgetEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
