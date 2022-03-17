import { HttpException, HttpStatus } from '@nestjs/common';

export class NotImplementedException extends HttpException{
    constructor(message:string) {
        super(message, HttpStatus.NOT_IMPLEMENTED);
    }
}