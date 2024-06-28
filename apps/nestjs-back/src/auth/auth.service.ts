import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import authConfig from '../config/authConfig';
import { ConfigType } from '@nestjs/config';
import { UserEntityPayload } from './auth.controller';

export interface User {
  id: string;
  name: string;
  email: string;
}

@Injectable()
export class AuthService {
  constructor(
    @Inject(authConfig.KEY) private config: ConfigType<typeof authConfig>,
  ) {}

  login(user: User) {
    const payload = { ...user };

    return jwt.sign(payload, this.config.jwt.secret, {
      expiresIn: '1d',
      audience: 'http://localhost:3001',
      issuer: 'http://localhost:3001',
    });
  }

  verify(jwtString: string): UserEntityPayload {
    try {
      const payload = jwt.verify(jwtString, this.config.jwt.secret) as (
        | jwt.JwtPayload
        | string
      ) &
        User;

      const { id, email } = payload;
      return { userId: id, email };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
