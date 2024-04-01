import { ProductEntity } from '../../../src/product/entities/product.entity';

export abstract class AbstractProductCrawler {
  constructor(protected crawlInfo: CrawlInfo) {}
  abstract autoSourceProduct(productName: string): ProductEntity[];
}

export type CrawlInfo = {
  url: string;
};
