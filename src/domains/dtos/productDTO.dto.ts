import { BadRequestException } from '../../infrastructure/errorHandlers/BadRequest';
import { HttpException, HttpStatus } from "@nestjs/common";

export class ProductDTO{
    private productName:string;
    private productValue:string;
    private productQuantity:number;
    private productOwner:string;

    constructor(productName:string, productValue:string, productQuantity:number, productOwner:string){ 
        this.productName = productName;
        this.productValue = productValue;
        this.productQuantity = productQuantity;
        this.productOwner = productOwner;
    }  

    isValid(){
        if(!this.productName || this.productName == '' || this.productName == undefined){
            throw new BadRequestException('Product Name is Required');
        }
        if(!this.productValue || this.productValue == '' || this.productValue == undefined){
            throw new BadRequestException('Product Value is Required');            
        }
        if(!this.productQuantity || this.productQuantity == undefined){
            throw new BadRequestException('Product Quantity is Required');
        }
        return true;
    }

    getProduct(){
        if(this.isValid()){
            return {
                productName: this.productName,
                productValue: this.productValue,
                productQuantity: this.productQuantity,
                productOwner:this.productOwner ?? ""
            }
        }
    }
}