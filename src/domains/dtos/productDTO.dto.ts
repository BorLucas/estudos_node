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
            throw new HttpException('Product Name is Required', HttpStatus.BAD_REQUEST);
        }
        if(!this.productValue || this.productValue == '' || this.productValue == undefined){
            throw new HttpException('Product Value is Required', HttpStatus.BAD_REQUEST);
        }
        if(!this.productQuantity || this.productQuantity == undefined){
            throw new HttpException('Product Quantity is Required', HttpStatus.BAD_REQUEST);
        }
        return true;
    }

    getProduct(){
        const isValid = this.isValid();
        if(isValid){
            return {
                productName: this.productName,
                productValue: this.productValue,
                productQuantity: this.productQuantity,
                productOwner:this.productOwner ?? ""
            }
        }
    }
}