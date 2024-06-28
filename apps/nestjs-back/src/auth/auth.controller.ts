import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from '../decorators/user.decorator';
import { AuthGuard } from '../guards/auth.guard';
export interface UserEntityPayload {
  userId: string;
  email: string;
}

@Controller('auth')
export class AuthController {
  constructor() {}

  @Get('/profile')
  @UseGuards(AuthGuard)
  getProfile(@User() user: UserEntityPayload) {
    return user;
  }
}
