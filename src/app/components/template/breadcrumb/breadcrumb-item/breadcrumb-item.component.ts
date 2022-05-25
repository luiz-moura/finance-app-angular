import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb-item',
  templateUrl: './breadcrumb-item.component.html',
  styleUrls: ['./breadcrumb-item.component.css']
})
export class BreadcrumbItemComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  @Input() name!: string;
  @Input() route!: string;
}
