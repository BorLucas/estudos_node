import { ProductsRepository } from './../../infrastructure/mysql/products.repository';
import { ProductDTO } from './../../domains/dtos/productDTO.dto';
import { Injectable } from '@nestjs/common';
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

    list(productId:number){
        return this.productsRepository.listOnlyOneProduct(productId);
    }

    listAll(){ 
        return this.productsRepository.listAllProducts();
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