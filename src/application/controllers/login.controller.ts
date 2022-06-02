import { ErrorDefault } from './../../infrastructure/errorHandlers/ErrorDefault';
import { loginRequestDTO } from './../../domains/dtos/loginRequestDTO.dto';
import { LoginService } from './../services/login.service';
import { Body, Controller, Get, Header, Post, Req, Res, Delete } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('api/v1/Users')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post('/Login')
  async login(@Body() requestBody:loginRequestDTO, @Res() res:Response, @Req() req:Request){
    try{
      let body = new loginRequestDTO(requestBody.login, requestBody.password).getLogin();
      const token = await this.loginService.login(body.login, body.password);
      res.status(200).json({token});
    }catch(error){
      res.status(error.status).json(new ErrorDefault(error.status, error.message).getError());
    }
    
  }

  @Post('/createUser')
  async createUser(@Body() requestBody:any){
    return await this.loginService.userRepository.createUser(requestBody.userName,requestBody.userEmail,requestBody.userPassword);
  }

  @Delete('/deleteUser')
  async deleteUser(@Body() requestBody:any){
    return await this.loginService.deleteUser(requestBody.userName);
  }
}