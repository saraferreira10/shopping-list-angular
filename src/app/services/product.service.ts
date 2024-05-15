import { Injectable } from '@angular/core';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  electronicsCategory = new Category('Electronics');
  clothingCategory = new Category('Clothing');
  booksCategory = new Category('Books');

  products: Product[] = [
    new Product(
      'Smartphone',
      this.electronicsCategory,
      699.99,
      'https://source.unsplash.com/random/400x400?smartphone',
      'A high-end smartphone with a great camera.'
    ),
    new Product(
      'T-Shirt',
      this.clothingCategory,
      19.99,
      'https://source.unsplash.com/random/400x400?shirt',
      'A comfortable cotton T-shirt.'
    ),
    new Product(
      'Book',
      this.booksCategory,
      29.99,
      'https://source.unsplash.com/random/400x400?books',
      'An interesting book on programming.'
    ),
    new Product(
      'Laptop',
      this.electronicsCategory,
      999.99,
      'https://source.unsplash.com/random/400x400?laptop',
      'A powerful laptop for professionals.'
    ),
    new Product(
      'Jeans',
      this.clothingCategory,
      49.99,
      'https://source.unsplash.com/random/400x400?jeans',
      'Stylish denim jeans.'
    ),
  ];

  constructor() {}
}
