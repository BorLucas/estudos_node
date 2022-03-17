import { NotFoundException } from '../../errorHandlers/NotFound';
import { UsersRepository } from './../../infrastructure/database/users.repository';
import { NotImplementedException } from '../../errorHandlers/NotImplemented';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as jwt from "jsonwebtoken";
import md5 from "md5";
require('dotenv').config();

@Injectable()
export class LoginService {
    private _secret:string;
    constructor(readonly userRepository: UsersRepository){
        this._secret = process.env.JWT_TOKEN_SECRET
    } 

    async deleteUser(userName:string){
        const user = await this.userRepository.findActiveUserbyUserName(userName);
        if(!user){
            throw new NotFoundException('User not Found');
        }
        return await this.userRepository.deleteUser(user.id);
    }

    async login(login:string, password:string){
        const user = await this.userRepository.findActiveUserbyLogin(login, password);
        if(!user){
            throw new NotFoundException('User not Found or Invalid Password');
        }
        var token = jwt.sign({ login, password }, this._secret);
        return token
    }

    async tokenValid(token:string){
        try{
            jwt.verify(token, this._secret);
        }catch(e){
            throw new Error(e);
        }
    }

    async saveToken(){
        throw new NotImplementedException('Method not implemented');
    }
}