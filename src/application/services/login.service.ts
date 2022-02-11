import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import md5 from "md5";


@Injectable()
export class LoginService {
    _secret:string;
    constructor(){
        this._secret = 'dd5df26b078bdb7e5651bfdd7099ea80';
    }

    async login(login:string, pwd:string){
        var token = jwt.sign({ login: login, password:pwd }, this._secret, {expiresIn:'30s'});
        return token
    }

    async tokenValid(token:string){
        var x = jwt.verify(token, this._secret);
        console.log(x);
    }
}