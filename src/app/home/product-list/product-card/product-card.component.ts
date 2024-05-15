import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product.model';
import { BadgeComponent } from './badge/badge.component';
import { ShoppingCartService } from '../../../services/shopping-cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private shoppingService: ShoppingCartService) {}

  addToCart() {
    this.shoppingService.addProduct(this.product, 1);
  }
}
