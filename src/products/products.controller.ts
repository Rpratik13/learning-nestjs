import { Product } from './products.model';
import { ProductsService } from './products.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): { id: string } {
    const productId = this.productsService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );

    return { id: productId };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string): Product {
    return this.productsService.getSingleProduct(prodId);
  }
}
