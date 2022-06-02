import { InternalErrorException } from '../errorHandlers/InternalServerError';
import { UsersEntity } from './../../domains/entitys/users.entity';
import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from "typeorm";

@Injectable()
@EntityRepository(UsersEntity)
export class UsersRepository extends Repository<UsersEntity>{
    async createUser(userName:string, userEmail:string, password:string){
        try{
            const user = this.create();
            user.userName = userName;
            user.userEmail = userEmail;
            user.userPassword = password;
            user.userActive = 1;
            return await this.save(user);
        }catch(e){
            throw new InternalErrorException(e.message);
        }
    }

    async deleteUser(idUser:number){
        try{
            const user = this.create();
            user.userActive = 0;
            return this.update(idUser, user);
        }catch(e){
            throw new InternalErrorException(e.message);
        }
    }

    async findActiveUserbyUserName(userName:string){
        try{
            return this.findOne({userName:userName, userActive:1});
        }catch(e){
            throw new InternalErrorException(e.message);
        }
    }

    async findActiveUserbyLogin(userLogin:string, userPassword:string){
        try{
            return this.findOne({userName:userLogin, userPassword:userPassword, userActive:1});
        }catch(e){
            throw new InternalErrorException(e.message);
        }
    }
}