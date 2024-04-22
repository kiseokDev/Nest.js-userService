import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import { DoememeSourcingInfoType } from 'apps/nestjs-back/util/sourcing/constant';

@Schema({ timestamps: true, collection: 'Stocks' })
export class StockEntity {
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

export const StockSchema = SchemaFactory.createForClass(StockEntity);

StockSchema.plugin(AutoIncrementID, {
  field: 'id',
});
