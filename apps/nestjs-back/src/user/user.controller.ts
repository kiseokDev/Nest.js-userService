import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { CommandBus, EventBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand, GetUserInfoQuery } from './user.handlers';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
    private eventBus: EventBus,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email, password } = createUserDto;
    // this.eventBus.publish(new UserCreatedEvent(name, email));
    const user = await this.commandBus.execute(
      new CreateUserCommand(name, email, password),
    );
    if (user) {
      return { message: 'User created' };
    }
    throw new UnauthorizedException();
  }

  @Get(':id')
  async getUser(@Param('id') userId: string) {
    return await this.queryBus.execute(new GetUserInfoQuery(userId));
  }
}
