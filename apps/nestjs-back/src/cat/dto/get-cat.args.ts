import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetCatsArgs {
  @Field({ nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  age?: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  breed?: string;
}
