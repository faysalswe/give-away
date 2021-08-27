import { Body, Controller, Post } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';
import { UserLogin } from '@give-away/api-interfaces';

@Controller('authentication')
export class AuthenticationController {

  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('token')
  getToken(@Body() userLogin: UserLogin) {
    return this.authenticationService.getToken(userLogin);
  }
}
