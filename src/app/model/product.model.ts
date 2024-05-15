import { Category } from './category.model';

export class Product {
  constructor(
    private product: string,
    private category: Category,
    private price: number,
    private imgUrl: string,
    private description: string
  ) {}

  getProduct() {
    return this.product;
  }

  getCategory() {
    return this.category;
  }

  getPrice() {
    return this.price;
  }

  getImgUrl() {
    return this.imgUrl;
  }

  getDescription() {
    return this.description;
  }
}
