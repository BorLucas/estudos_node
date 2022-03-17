import { HttpException, HttpStatus } from "@nestjs/common";
export class ResponseDTO{
    public statusCode:number;
    public statusMessage:string;
    public data?:object;
}