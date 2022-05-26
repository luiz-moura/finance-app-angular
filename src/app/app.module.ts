import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create/transaction-create.component';
import { TransactionEditComponent } from './components/transaction/transaction-edit/transaction-edit.component';
import { TransactionListComponent } from './components/transaction/transaction-list/transaction-list.component';
import { TransactionDeleteComponent } from './components/transaction/transaction-delete/transaction-delete.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { CategoryListComponent } from './components/category/category-list/category-list.component';
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryEditComponent } from './components/category/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { TransactionCategoryBadgeComponent } from './components/transaction/transaction-category-badge/transaction-category-badge.component';
import { BreadcrumbContainerComponent } from './components/template/breadcrumb/breadcrumb-container/breadcrumb-container.component';
import { BreadcrumbItemComponent } from './components/template/breadcrumb/breadcrumb-item/breadcrumb-item.component';
import { LoadingComponent } from './components/template/loading/loading.component';
import { BudgetsComponent } from './views/budgets/budgets.component';
import { BudgetCreateComponent } from './components/budget/budget-create/budget-create.component';
import { BudgetListComponent } from './components/budget/budget-list/budget-list.component';
import { BudgetEditComponent } from './components/budget/budget-edit/budget-edit.component';
import { BudgetDeleteComponent } from './components/budget/budget-delete/budget-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    TransactionsComponent,
    TransactionCreateComponent,
    TransactionDeleteComponent,
    TransactionListComponent,
    TransactionEditComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    TransactionCategoryBadgeComponent,
    HomeComponent,
    BreadcrumbContainerComponent,
    BreadcrumbItemComponent,
    LoadingComponent,
    BudgetsComponent,
    BudgetCreateComponent,
    BudgetListComponent,
    BudgetEditComponent,
    BudgetDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
