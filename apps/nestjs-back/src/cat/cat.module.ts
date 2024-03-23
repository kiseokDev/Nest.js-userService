import * as AutoIncrementFactory from 'mongoose-sequence';
import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { MongooseModule, getConnectionToken } from '@nestjs/mongoose';
import { Cat, CatSchema } from './schema/cat.schema';
import { Connection } from 'mongoose';

@Module({
  //   imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Cat.name,
        useFactory: async (connection: Connection) => {
          const schema = CatSchema;
          const AutoIncrement = require('mongoose-sequence')(connection);
          schema.plugin(AutoIncrement, { inc_field: 'id' });
          return schema;
        },
        inject: [getConnectionToken('')],
      },
    ]),
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
