import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService, ShoppingCartService]
})
export class AppComponent {
  title = 'shopping-cart';
}
