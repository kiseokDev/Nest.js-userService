import { Module } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { ProvidersController } from './providers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProviderEntity, ProviderSchema } from './entities/provider.entity';
import { SourcingCommand } from 'apps/nestjs-back/util/sourcing/sourcingCommand';
import { CrawlCommand } from 'apps/nestjs-back/util/crawler/crawlCommand';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProviderEntity.name, schema: ProviderSchema },
    ]),
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService, SourcingCommand, CrawlCommand],
})
export class ProvidersModule {}
