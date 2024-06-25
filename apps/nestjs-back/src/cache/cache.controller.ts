import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, Inject, UseInterceptors } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller('cache')
@UseInterceptors(CacheInterceptor)
export class CacheController {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  @Get('')
  @CacheKey('time')
  @CacheTTL(1000)
  async getCache(): Promise<string> {
    // return Date.now().toString();
    //   const cachedTime = await this.cacheManager.get<string>('time');
    //   if (cachedTime) {
    //     return `cached time: ${cachedTime}`;
    //   }
    //   const now = new Date().toISOString();
    //   await this.cacheManager.set('time', now, 10000); //10초
    //   return `current time: ${now}`;
    // }
    return Date.now().toString();
  }
}
