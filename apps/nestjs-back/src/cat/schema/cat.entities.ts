import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Types } from 'mongoose';

@ObjectType()
export class Cats {
  @Field(() => ID)
  _id: Types.ObjectId;

  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  age?: number;

  @Field({ nullable: true })
  breed: string;
}

@InputType()
export class CatsInput {
  @Field(() => Int)
  age: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  breed: string;
}
