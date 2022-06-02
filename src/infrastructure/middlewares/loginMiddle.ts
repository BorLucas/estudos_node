import { LoginService } from './../../application/services/login.service';
import { ErrorDefault } from './../errorHandlers/ErrorDefault';
import { HttpStatus, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

require('dotenv').config();

export class LoginMiddleware implements NestMiddleware {
    constructor(readonly loginservice: LoginService){}

    async use(req: Request, res: Response, next: NextFunction) {
        const secret = process.env.JWT_TOKEN_SECRET;
        try{
            const header = req.headers.authorization.replace("Bearer ", '')
            jwt.verify(header, secret);
        }catch(e){
            res.status(HttpStatus.UNAUTHORIZED).json(new ErrorDefault(HttpStatus.UNAUTHORIZED, e.message).getError());
        }
        next();
    }
  }
  