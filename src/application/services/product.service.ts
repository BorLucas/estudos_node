import { ProductDTO } from './../../domains/dtos/productDTO.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    
    create(productName:string, productValue:string, productQuantity:number, productOwner:string){
        let productDTO = new ProductDTO(productName, productValue, productQuantity, productOwner);
        let product = productDTO.getProduct();
        const sql = `INSERT INTO products(productName, productValue, productQuantity, productOwner) VALUES('${product.productName}', '${product.productValue}', '${product.productQuantity}', '${product.productOwner}')`;
        console.log(sql);
    }

    list(productId:number){
        const sql = `SELECT * FROM products WHERE productId = ${productId}`;
        console.log(sql);
    }

    listAll(){
        const sql = `SELECT * FROM products`;
        console.log(sql);
    }

    update(productName:string, productValue:string, productQuantity:number, productOwner:string, productId:number){
        let productDTO = new ProductDTO(productName, productValue, productQuantity, productOwner);
        let product = productDTO.getProduct();
        const sql = `UPDATE products SET productName = '${product.productName}', productValue = '${product.productValue}', productQuantity = '${product.productQuantity}', productOwner = '${product.productOwner}' WHERE productId = ${productId}`;
        console.log(sql);
    }

    delete(productId:number){
        const sql = `DELETE FROM products WHERE productId = ${productId}`;
        console.log(sql);
    }

}