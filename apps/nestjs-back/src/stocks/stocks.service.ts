import { InjectModel } from '@nestjs/mongoose';
import { StockEntity } from './schemas/stock.schema';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import {} from 'apps/nestjs-back/util/interceptor/browser.interceptor';
import { Browser } from 'puppeteer';
@Injectable()
export class StocksService {
  browser: Browser;
  constructor(
    @InjectModel(StockEntity.name)
    private stockModel: Model<StockEntity>,
  ) {}

  async findAll(): Promise<StockEntity[]> {
    return this.stockModel.find().exec();
  }

  async stockTest() {
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
