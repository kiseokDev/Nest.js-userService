import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StockEntity, StockSchema } from './schemas/stock.schema';
import { SourcingCommand } from 'apps/nestjs-back/util/sourcing/sourcingCommand';
import { CrawlCommand } from 'apps/nestjs-back/util/crawler/crawlCommand';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StockEntity.name, schema: StockSchema },
    ]),
  ],
  controllers: [StocksController],
  providers: [StocksService, SourcingCommand, CrawlCommand],
})
export class StocksModule {}
