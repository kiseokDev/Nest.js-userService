import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { PuppeteerInterceptor } from '../util/interceptor/browser.interceptor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('puppeteer')
  @UseInterceptors(PuppeteerInterceptor)
  async getPuppeteer(): Promise<string> {
    return 'puppeteer interceptor test';
  }

  @Get('config')
  getConfig(): string {
    return this.configService.get('database');
  }
}
