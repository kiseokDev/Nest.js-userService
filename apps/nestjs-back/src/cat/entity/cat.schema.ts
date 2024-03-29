import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
@Schema({ timestamps: true })
export class Cat {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
CatSchema.plugin(AutoIncrementID, {
  field: 'id',
});
