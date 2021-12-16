import { createProductDTO } from '../../domains/dtos/createProductDTO.dto';
import { ProductService } from '../services/product.service';
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('api/v1/products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('listAll')
  listAll(){
    return this.productService.listAll();
  }

  @Get('list/:productId')
  list(@Param() queryParams){
      return this.productService.list(queryParams.productId);
  }

  @Post()
  createProduct(@Body() requestBody:createProductDTO){
    return this.productService.create(requestBody.productName, requestBody.productValue, requestBody.productQuantity, requestBody.productOwner);
  }

  @Put(':productId')
  updateProduct(@Body() requestBody:createProductDTO, @Param() queryParams){
    return this.productService.update(requestBody.productName, requestBody.productValue, requestBody.productQuantity, requestBody.productOwner, queryParams.productId);
  }

  @Delete(':productId')
  deleteProduct(@Param() queryParams){
    return this.productService.delete(queryParams.productId);
  }

}
