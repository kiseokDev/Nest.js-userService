import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';
import { CatsResolver } from './cat.resolver';

@Module({
  //   imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService, CatsResolver],
})
export class CatModule {}
