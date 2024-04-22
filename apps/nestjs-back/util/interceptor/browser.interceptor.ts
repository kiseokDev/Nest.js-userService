import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import puppeteer from 'puppeteer';
import { StocksService } from 'apps/nestjs-back/src/stocks/stocks.service';

@Injectable()
export class PuppeteerInterceptor implements NestInterceptor {
  constructor(private readonly stockService: StocksService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    // Launch the browser
    console.log('Launching browser');
    const browser = await puppeteer.launch({ headless: false });
    this.stockService.setBrowser(browser);

    return next.handle().pipe(
      tap(async () => {
        console.log('Closing browser');
        await browser.close();
      }),
    );
  }
}
