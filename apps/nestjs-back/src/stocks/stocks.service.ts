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

    // 네트워크 연결이 2개 이하가 되면 페이지 로드가 완료된 것으로 간주하고, 최대 60초까지 기다립니다.
    await page.goto('https://www.choicestock.co.kr/search/summary/TSLA', {
      waitUntil: 'networkidle2',
      timeout: 60000, // 타임아웃을 60초로 설정
    });

    try {
      await page.waitForSelector('.dataBox', { timeout: 10000 }); // 60초 동안 기다림
      const content = await page.evaluate(() => {
        const element = document.querySelector('.dataBox');
        return element ? element.innerHTML : null;
      });
      console.log(content);
    } catch (error) {
      this.browser.close();
    }
  }
  getBrowser() {}
  setBrowser(browser: Browser) {
    this.browser = browser;
  }
}
