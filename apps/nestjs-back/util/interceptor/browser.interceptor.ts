import {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import puppeteer from 'puppeteer';

@Injectable()
export class PuppeteerInterceptor implements NestInterceptor {
  constructor() {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    // Launch the browser
    console.log('Launching browser');
    const browser = await puppeteer.launch({ headless: false });

    return next.handle().pipe(
      tap(async () => {
        console.log('Closing browser');
        await browser.close();
      }),
    );
  }
}
