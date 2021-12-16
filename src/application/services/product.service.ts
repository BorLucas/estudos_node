import { ProductsRepository } from './../../infrastructure/mysql/products.repository';
import { ProductDTO } from './../../domains/dtos/productDTO.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository:ProductsRepository
    ){}
    
    create(productName:string, productValue:string, productQuantity:number, productOwner:string){
        let dto = new ProductDTO(productName, productValue, productQuantity, productOwner);
        let productDTO = dto.getProduct();
        return this.productsRepository.createProduct(productDTO.productName, productDTO.productValue, productDTO.productQuantity, productDTO.productOwner);
    }

    async list(productId:number){
        const result = await this.productsRepository.listOnlyOneProduct(productId);        
        if(!result){
            throw new HttpException({
                status:HttpStatus.NOT_FOUND, 
                error:`Product ID ${productId} not found`
            }, HttpStatus.NOT_FOUND);
        }
        return result;
    }

    async listAll(){
        const result = await this.productsRepository.listAllProducts();
        if(!result || result.length == 0){
            throw new HttpException({
                status:HttpStatus.NOT_FOUND, 
                error:`No products found`
            }, HttpStatus.NOT_FOUND);
        }
        console.log(result);
        return result;
    }

    update(productName:string, productValue:string, productQuantity:number, productOwner:string, productId:number){
        let dto = new ProductDTO(productName, productValue, productQuantity, productOwner);
        let productDTO = dto.getProduct();
        return this.productsRepository.updateProduct(productId, productDTO.productName, productDTO.productValue, productDTO.productQuantity, productDTO.productOwner);
    }

    delete(productId:number){
        return this.productsRepository.deleteProduct(productId);
    }

}