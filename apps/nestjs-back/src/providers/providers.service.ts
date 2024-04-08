import { InjectModel } from '@nestjs/mongoose';
import { ProviderEntity } from './entities/provider.entity';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {} from 'apps/nestjs-back/util/interceptor/browser.interceptor';
import { Browser } from 'puppeteer';
@Injectable()
export class ProvidersService {
  browser: Browser;
  constructor(
    @InjectModel(ProviderEntity.name)
    private productModel: Model<ProviderEntity>,
  ) {}

  async findAll(): Promise<ProviderEntity[]> {
    return this.productModel.find().exec();
  }

  async findKeyWord() {
    const page = await this.browser.newPage();
    await page.goto('https://www.google.com');
    console.log('browser open');
  }
  getBrowser() {
    return this.browser;
  }
  setBrowser(browser: Browser) {
    this.browser = browser;
  }
}
