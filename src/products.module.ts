import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './application/services/product.service';
import { ProductController } from './application/controllers/product.controller';
import { ProductsRepository } from './infrastructure/mysql/products.repository';
import { Module } from '@nestjs/common';

@Module({
    imports: [
      TypeOrmModule.forFeature([
        ProductsRepository
      ]),
    ],
    controllers: [ProductController],
    providers: [
        ProductService
    ],
  })
  export class ProductsModule {}