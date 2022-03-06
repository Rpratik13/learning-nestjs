import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from './products.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  insertProduct(title: string, description: string, price: number): string {
    const productId = Math.random().toString();
    const newProduct = new Product(productId, title, description, price);

    this.products.push(newProduct);

    return productId;
  }

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getSingleProduct(productId: string): Product {
    const product = this.products.find((prod) => prod.id === productId);

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...product };
  }
}
