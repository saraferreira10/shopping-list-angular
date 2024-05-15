import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
