import { InternalErrorException } from '../../infrastructure/errorHandlers/InternalServerError';
import { ResponseDTO } from './../../domains/dtos/ResponseDTO';
import { BadRequestException } from '../../infrastructure/errorHandlers/BadRequest';
import { UnauthorizedException } from '../../infrastructure/errorHandlers/Unauthorized';
import { LoginService } from './../services/login.service';
import { createProductDTO } from '../../domains/dtos/createProductDTO.dto';
import { ProductService } from '../services/product.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Headers, HttpStatus } from '@nestjs/common';

@Controller('api/v1/products')
export class ProductController {
  constructor(private productService: ProductService,
              private loginservice: LoginService
            ) {}

  @Get('listAll')
  async listAll(){
    return await this.productService.listAll();
  }

  @Get('list/:productId')
  async list(@Param() queryParams){
    return await this.productService.list(queryParams.productId);
  }

  @Post()
  async createProduct(@Body() requestBody:createProductDTO){
    
    return this.productService.create(requestBody.productName, requestBody.productValue, requestBody.productQuantity, requestBody.productOwner);
  }

  @Put(':productId')
  async updateProduct(@Body() requestBody:createProductDTO, @Param() queryParams): Promise<ResponseDTO>{
    
    try{
      await this.productService.update(requestBody.productName, requestBody.productValue, requestBody.productQuantity, requestBody.productOwner, queryParams.productId);
      return this.responseFactory(HttpStatus.OK, 'Product updated successfully')
    }catch(error){
      throw new InternalErrorException(error);
    }
  }

  @Delete(':productId')
  async deleteProduct(@Param() queryParams){
    
    return this.productService.delete(queryParams.productId);
  }

  async validateUser(auth:string){
    if(auth == "" || !auth){
      throw new BadRequestException('Authorization header is required');
    }
    try{
      return await this.loginservice.tokenValid(auth)
    }catch(error){
      throw new UnauthorizedException('Unauthorized user');
    }
  }

  responseFactory(statusCode:number, statusMessage:string, data?:object):ResponseDTO{
    return {
      statusCode,
      statusMessage,
      data
    }
  }

}
