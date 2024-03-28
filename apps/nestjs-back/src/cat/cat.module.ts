import * as AutoIncrementFactory from 'mongoose-sequence';
import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Cat, CatSchema } from '../schemas/cat.schema';
import { Connection } from 'mongoose';

@Module({
  //   imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
