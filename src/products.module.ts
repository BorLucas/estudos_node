import { LoginService } from './application/services/login.service';
import { LoginController } from './application/controllers/login.controller';
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
    controllers: [
      ProductController,
      LoginController,
     ],
    providers: [
        ProductService,
        LoginService
    ],
  })
  export class ProductsModule {}