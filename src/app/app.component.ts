import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-nav></app-nav>
    <div class="flex">
      <app-sidebar class="w-1/6"></app-sidebar>
      <app-content class="w-5/6 p-10"></app-content>
    </div>
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-finance-app';
}
