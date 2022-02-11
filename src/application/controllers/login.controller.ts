import { loginRequestDTO } from './../../domains/dtos/loginRequestDTO.dto';
import { LoginService } from './../services/login.service';
import { Body, Controller,Get,Header,Post, Req, Res} from '@nestjs/common';

@Controller('api/v1/Login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  async login(@Body() requestBody:loginRequestDTO){
    let body = new loginRequestDTO(requestBody.login, requestBody.password).getLogin();
    return await this.loginService.login(body.login, body.password);
  }

  @Get()
  async validarToken(@Req() req:Request){
      let headers = req.headers;
      return await this.loginService.tokenValid(headers.get('Authorization'));
  }

}