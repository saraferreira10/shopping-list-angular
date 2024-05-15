import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.products = this.productService.products;
  }
}
