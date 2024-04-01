import { ProductEntity } from '../../../../src/product/entities/product.entity';
import { DOMEME_CRAWL_INFO } from '../../constant';
import { AbstractProductCrawler } from '../providerCrawler.interface';

export class DomemeCrawler extends AbstractProductCrawler {
  constructor() {
    super(DOMEME_CRAWL_INFO);
  }

  autoSourceProduct(productName: string): ProductEntity[] {
    this.goToBrowser(this.crawlInfo.url);
    const beforeProccessing = this.searchProduct(productName);
    const afterProccessing = this.processingProduct(
      beforeProccessing,
    ) as ProductEntity[];
    return afterProccessing;
  }

  goToBrowser(url: string) {
    console.log(`Go to browser with ${url}`);
  }
  searchProduct(productName: string) {
    console.log(`Search product with ${productName}`);
    return [];
  }
  processingProduct(productList: any[]) {
    console.log(`Processing product with ${productList}`);
    return [new ProductEntity(), new ProductEntity()];
  }
}
