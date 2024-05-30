import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, UseInterceptors } from '@nestjs/common';

@Controller('cache2')
@UseInterceptors(CacheInterceptor)
export class CacheController {
  //   constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
