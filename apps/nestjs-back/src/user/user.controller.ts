import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dto/create-user.dto';
import { TestEvent } from './user.event';
import { UserService } from './user.service';
import { VerifyEmailDto } from './dto/verify-email.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { User } from './schema/user.schema';

@Controller('users')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
    private eventBus: EventBus,
    private userService: UserService,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    // const user = await this.commandBus.execute(
    //   new CreateUserCommand(name, email, password),
    // );
    // if (user) {
    //   return { message: 'User created' };
    // }
    // throw new UnauthorizedException();
    return await this.userService.createUser(name, email, password);
  }

  @Get('/:id')
  async getUser(@Param('id') userId: string): Promise<User> {
    // return await this.queryBus.execute(new GetUserInfoQuery(userId));
    return await this.userService.getUserInfo(userId);
  }

  @Get()
  async list(): Promise<User[]> {
    return await this.eventBus.publish(new TestEvent());
  }

  @Post('/email-verify')
  verifyEmail(@Body() dto: VerifyEmailDto) {
    return this.userService.verifyEmail(dto.signupVerifyToken);
  }
  @Post('/login')
  login(@Body() dto: UserLoginDto) {
    return this.userService.login(dto.email, dto.password);
  }
}
