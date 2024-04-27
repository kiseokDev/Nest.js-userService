import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserController } from './user.controller';
import {
  CreateUserHandler,
  GetUserInfoHandler,
  UserEventHandler,
} from './user.handlers';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { EmailModule } from '../email/email.module';
@Module({
  imports: [
    EmailModule,
    CqrsModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [CreateUserHandler, GetUserInfoHandler, UserEventHandler],
})
export class UserModule {}
