import { Injectable } from '@nestjs/common';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const productId = new Date().toString();
    const newProduct = new Product(productId, title, description, price);

    this.products.push(newProduct);

    return productId;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }
}
