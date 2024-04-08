import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { PuppeteerInterceptor } from 'apps/nestjs-back/util/interceptor/browser.interceptor';

@UseInterceptors(PuppeteerInterceptor)
@Controller('keyword')
export class KeywordController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  getKeyword() {
    return this.providersService.findKeyWord();
  }
}
