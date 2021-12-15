import { ProductService } from './application/services/product.service';
import { AppService } from './application/services/app.service';
import { ProductController } from './application/controllers/product.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
