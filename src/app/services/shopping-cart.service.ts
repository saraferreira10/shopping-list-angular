import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCart: { product: Product; quantity: number }[] = [];

  constructor() {}

  addProduct(product: Product, quantity: number) {
    this.shoppingCart.push({ product, quantity });
    console.log(this.shoppingCart)
  }
}
