import { loginRequestDTO } from './../../domains/dtos/loginRequestDTO.dto';
import { LoginService } from './../services/login.service';
import { Body, Controller, Get, Header, Post, Req, Res, Delete } from '@nestjs/common';

@Controller('api/v1/Login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async login(@Body() requestBody:loginRequestDTO){
    let body = new loginRequestDTO(requestBody.login, requestBody.password).getLogin();
    return await this.loginService.login(body.login, body.password);
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