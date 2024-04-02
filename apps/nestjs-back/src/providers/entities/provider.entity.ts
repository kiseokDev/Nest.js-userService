import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import { DoememeSourcingInfoType } from 'apps/nestjs-back/util/sourcing/constant';

@Schema({ timestamps: true, collection: 'Providers' })
export class ProviderEntity {
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  url: string;
  @Prop()
  description: string;
  @Prop({ type: Object })
  crawlInfo: DoememeSourcingInfoType;
}

export const ProviderSchema = SchemaFactory.createForClass(ProviderEntity);

ProviderSchema.plugin(AutoIncrementID, {
  field: 'id',
});
