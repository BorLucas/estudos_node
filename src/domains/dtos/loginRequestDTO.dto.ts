import { HttpException, HttpStatus } from '@nestjs/common';
export class loginRequestDTO{
    public login:string;
    public password:string;

    constructor(requestedLogin:string, requestedPassword:string){
        this.login = requestedLogin;
        this.password = requestedPassword;
    }

    isValid(){
        if(!this.login || this.login == '' || this.login == undefined){
            throw new HttpException('Login is Required', HttpStatus.BAD_REQUEST);
        }
        if(!this.password || this.password == '' || this.password == undefined){
            throw new HttpException('Password is Required', HttpStatus.BAD_REQUEST);
        }
        return true;
    }

    getLogin(){
        const isValid = this.isValid();
        if(isValid){
            return {
                login: this.login,
                password: this.password
            }
        }
    }
}