import { Prop } from '@nestjs/mongoose';

export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  password: string;
}
