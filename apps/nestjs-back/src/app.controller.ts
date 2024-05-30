import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { CACHE_MANAGER, Cache, CacheInterceptor } from '@nestjs/cache-manager';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('config')
  getConfig(): string {
    return this.configService.get('database');
  }
  @Get('/cache/get')
  // @CacheKey('time')
  // @CacheTTL(10000)
  async getCache(): Promise<string> {
    return Date.now().toString();
    // const cachedTime = await this.cacheManager.get<string>('time');
    // if (cachedTime) {
    //   return `cached time: ${cachedTime}`;
    // }
    // const now = new Date().toISOString();
    // await this.cacheManager.set('time', now, 10000); //10초
    // return `current time: ${now}`;
  }

  @Get('/cache/set')
  async setCache(): Promise<string> {
    const now = new Date().toISOString();
    await this.cacheManager.set('time', now, 10000);
    return 'set cache';
  }
}
