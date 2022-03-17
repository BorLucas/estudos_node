import { Injectable } from '@nestjs/common';
import { ProductsEntity } from '../../domains/entitys/products.entity';
import { EntityRepository, Repository } from "typeorm";

@Injectable()
@EntityRepository(ProductsEntity)
export class ProductsRepository extends Repository<ProductsEntity>{
    async createProduct(productName:string, productValue:string, productQuantity:number, productOwner?:string){
        try{
            const product = this.create();
            product.productName = productName;
            product.productValue= productValue;
            product.productQuantity= productQuantity;
            product.productOwner = productOwner;
            return await this.save(product);
        }catch(e){
            return e;
        }
    }

    listAllProducts(){
        try{
            return this.find();
        }catch(e){
            return e;
        }
    }

    listOnlyOneProduct(productId:number){
        try{
            return this.findOne({productId});
        }catch(e){
            return e;
        }
    }

    updateProduct(productId:number, productName?:string, productValue?:string, productQuantity?:number, productOwner?:string){
        try{
            const product = this.create();
            product.productName = productName;
            product.productValue= productValue;
            product.productQuantity= productQuantity;
            product.productOwner = productOwner;
            return this.update(productId, product)
        }catch(e){
            return e;
        }
    }
    
    deleteProduct(productId:number){
        try{
            return this.delete(productId);
        }catch(e){
            return e;
        }
    }
}