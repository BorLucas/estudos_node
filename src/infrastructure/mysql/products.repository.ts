import { Injectable } from '@nestjs/common';
import { ProductsEntity } from '../../domains/entitys/products.entity';
import { EntityRepository, Repository } from "typeorm";

@Injectable()
@EntityRepository(ProductsEntity)
export class ProductsRepository extends Repository<ProductsEntity>{
    listAllProducts(){
        return this.find();
    }

    listOnlyOneProduct(productId:number){
        return this.findOne({productId});
    }

    async createProduct(productName:string, productValue:string, productQuantity:number, productOwner?:string){
        const product = this.create();
        product.productName = productName;
        product.productValue= productValue;
        product.productQuantity= productQuantity;
        product.productOwner = productOwner;
        return await this.save(product);
    }

    deleteProduct(productId:number){
        return this.delete(productId);
    }
}