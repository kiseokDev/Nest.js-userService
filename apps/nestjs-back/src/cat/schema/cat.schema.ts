import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import { Types } from 'mongoose';
@Schema({ timestamps: true })
export class Cat {
  _id: Types.ObjectId;

  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ required: false })
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
CatSchema.plugin(AutoIncrementID, {
  field: 'id',
});
