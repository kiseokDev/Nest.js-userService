import { Product } from 'apps/nestjs-back/src/product/entities/product.entity';
import { CupangUpload } from './cupang';
import { NaverStoreUpload } from './naver';
import { UPLOAD_PLATFORM } from './platFormEnum';

export class UploadCommand implements UploadCommandInterface {
  private platformMap: Map<string, platFormInterface> = new Map();
  constructor(private platform: platFormInterface) {
    this.platformMap.set(UPLOAD_PLATFORM.CUPANG, new CupangUpload());
    this.platformMap.set(UPLOAD_PLATFORM.NAVER, new NaverStoreUpload());
  }
  setPlatform(platformName: UPLOAD_PLATFORM): void {
    this.platform = this.platformMap.get(platformName);
  }
  getPlatform(): platFormInterface {
    return this.platform;
  }
  uploadProductToPlatform(product: Product) {
    return this.platform.upload(product);
  }
}

export interface UploadCommandInterface {
  setPlatform(platform: string): void;
  getPlatform(): platFormInterface;
  uploadProductToPlatform(product: Product): UploadResult;
}

export interface platFormInterface {
  upload(product: Product): UploadResult;
}

export type UploadResult = any;
