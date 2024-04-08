import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import puppeteer from 'puppeteer';
import { ProvidersService } from 'apps/nestjs-back/src/providers/providers.service';

@Injectable()
export class PuppeteerInterceptor implements NestInterceptor {
  constructor(private readonly providersService: ProvidersService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    // Launch the browser
    console.log('Launching browser');
    const browser = await puppeteer.launch({ headless: false });
    this.providersService.setBrowser(browser);

    return next.handle().pipe(
      tap(async () => {
        console.log('Closing browser');
        const broswer2 = this.providersService.getBrowser();
        console.log(broswer2.connected);
        await browser.close();
        console.log(broswer2.connected);
      }),
    );
  }
}
