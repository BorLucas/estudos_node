import { ProductsEntity } from './domains/entitys/products.entity';
import { ProductsRepository } from './infrastructure/mysql/products.repository';
import { ProductService } from './application/services/product.service';
import { ProductController } from './application/controllers/product.controller';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'controleestoque',
        entities:[ProductsEntity]
    }),
    TypeOrmModule.forFeature([
      ProductsRepository
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
