import { Schema } from '@nestjs/mongoose';
import * as schemas from 'apps/nestjs-back/src/schemas';

export type SchemaTypes<T extends keyof typeof schemas> = InstanceType<
  (typeof schemas)[T]
>;
