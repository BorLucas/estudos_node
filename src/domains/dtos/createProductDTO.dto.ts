import { HttpException, HttpStatus } from '@nestjs/common';
export class createProductDTO{
    public productName:string;
    public productValue:string;
    public productQuantity:number;
    public productOwner:string;
}