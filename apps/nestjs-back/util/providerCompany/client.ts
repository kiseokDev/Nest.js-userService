import { ProductEntity } from '../../src/product/entities/product.entity';
import { AbstractProductCrawler } from './crawler/providerCrawler.interface';

export class CrawlProductClient {
  protected cralwer: AbstractProductCrawler;

  setSupplyCrawler(cralwer: AbstractProductCrawler) {
    this.cralwer = cralwer;
  }
  crawl(productName: string): ProductEntity[] {
    return this.cralwer.autoSourceProduct(productName);
  }
}
