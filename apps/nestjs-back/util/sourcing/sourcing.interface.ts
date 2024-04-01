import { ProductEntity } from '../../src/product/entities/product.entity';

export abstract class AbstractProductCrawler {
  constructor(protected crawlInfo: SourcingInfo) {}
  abstract autoSourceProduct(productName: string): ProductEntity[];
}

export interface ISourcing {
  sourcingInfo: SourcingInfo;
  sourcing(productName: string): Promise<string>;
}

export type SourcingInfo = {
  url: string;
  loginUrl: string;
  searchUrl: string;
  productName: string;
  productUrl: string;
  price: string;
  description: string;
  images: string[];
};
