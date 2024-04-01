import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderEntity, ProviderSchema } from './entities/provider.entity';
import { CrawlProductClient } from 'apps/nestjs-back/util/providerCompany/client';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProviderEntity.name, schema: ProviderSchema },
    ]),
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService, CrawlProductClient],
})
export class ProvidersModule {}
