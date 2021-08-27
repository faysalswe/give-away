import { Injectable } from '@nestjs/common';
import { Token, UserLogin } from '@give-away/api-interfaces';

@Injectable()
export class AuthenticationService {
  getToken(credential: UserLogin): Token {
    console.log(credential);
    return { token: `${credential.email}-${credential.password}`, createdAt: new Date() };
  }
}
