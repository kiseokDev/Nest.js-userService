import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { PuppeteerInterceptor } from 'apps/nestjs-back/util/interceptor/browser.interceptor';

@UseInterceptors(PuppeteerInterceptor)
@Controller('stock')
export class StocksController {
  constructor(private readonly providersService: StocksService) {}

  @Get()
  getKeyword() {
    return this.providersService.stockTest();
  }
}
