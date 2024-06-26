import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor() {} // @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,

  login(user: User) {
    const payload = { ...user };
    return 'payload';

    // return jwt.sign(payload, this.config.jwt.secret, {
    //   expiresIn: '1d',
    //   audience: 'http://localhost:3001',
    //   issuer: 'http://localhost:3001',
    // });
  }
}
