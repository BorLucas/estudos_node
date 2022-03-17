import { NotFoundException } from '../../errorHandlers/NotFound';
import { UsersRepository } from './../../infrastructure/database/users.repository';
import { NotImplementedException } from '../../errorHandlers/NotImplemented';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import md5 from "md5";
require('dotenv').config();

@Injectable()
export class LoginService {
    _secret:string;
    constructor(readonly userRepository: UsersRepository){
        this._secret = process.env.JWT_TOKEN_SECRET
    } 

    async deleteUser(userName:string){
        let user = await  this.userRepository.findActiveUser(userName);
        console.log(user);
        if(!user){
            throw new NotFoundException('User not Found');
        }
        return await this.userRepository.deleteUser(user.id);
    }


    async login(login:string, password:string){
        var token = jwt.sign({ login, password }, this._secret);
        return token
    }

    async tokenValid(token:string){
        return jwt.verify(token, this._secret);
    }

    async saveToken(){
        throw new NotImplementedException('Method not implemented');
    }
}