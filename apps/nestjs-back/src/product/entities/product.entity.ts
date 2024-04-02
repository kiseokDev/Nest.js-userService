import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AutoIncrementID } from '@typegoose/auto-increment';

@Schema({ timestamps: true, collection: 'Products' })
export class ProductEntity {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  images: string[];

  @Prop()
  url: string;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);
// export const ProductSchema = new mongoose.Schema({
//   product_id: { type: Number, unique: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   images: { type: [String], required: true },
//   url: { type: String, required: true },
// });

ProductSchema.plugin(AutoIncrementID, {
  field: 'id',
});
