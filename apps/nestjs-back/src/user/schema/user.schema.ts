import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true, collection: 'Users' })
export class User {
  _id: string;
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  signupVerifyToken: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
