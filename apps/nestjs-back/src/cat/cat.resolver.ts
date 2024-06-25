import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { Cats } from './schema/cat.entities';
import { CatService } from './cat.service';
import { CatsInput } from './schema/cat.entities';
import { GetCatsArgs } from './dto/get-cat.args';

@Resolver(() => Cats)
export class CatsResolver {
  constructor(private readonly catsService: CatService) {}
  @Query(() => String)
  hello(): string {
    return 'world';
  }

  @Query(() => [Cats])
  async cats(): Promise<Cats[] | GetCatsArgs> {
    return this.catsService.findAll();
  }
  @Query(() => [Cats], { name: 'queryParamTest' })
  async ArgsTest(@Args() args: GetCatsArgs): Promise<Cats[] | GetCatsArgs> {
    console.log(args);
    return [];
  }

  //추가된 부분
  @Mutation(() => Cats)
  async create(@Args('catsInput') catsInput: CatsInput): Promise<Cats> {
    return this.catsService.create(catsInput);
  }

  @Query(() => Cats, { name: 'cat' })
  async cat(@Args('id') id: string): Promise<Cats> {
    return this.catsService.findOne(id);
  }
}
