import { ProductsRepository } from './../../infrastructure/mysql/products.repository';
import { ProductDTO } from './../../domains/dtos/productDTO.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductsRepository)
        private productsRepository:ProductsRepository
    ){

    }
    
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
        let productDTO = new ProductDTO(productName, productValue, productQuantity, productOwner);
        let product = productDTO.getProduct();
        const sql = `UPDATE products SET productName = '${product.productName}', productValue = '${product.productValue}', productQuantity = '${product.productQuantity}', productOwner = '${product.productOwner}' WHERE productId = ${productId}`;
        console.log(sql);
    }

    delete(productId:number){
        return this.productsRepository.deleteProduct(productId);
    }

}