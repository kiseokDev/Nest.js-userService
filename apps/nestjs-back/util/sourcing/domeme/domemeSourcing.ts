import { ProductEntity } from '../../../src/product/entities/product.entity';
import { DOMEME_CRAWL_INFO } from '../constant';
import { ISourcing, SourcingInfo } from '../sourcing.interface';

export class DomemeSourcing implements ISourcing {
  sourcingInfo: SourcingInfo = DOMEME_CRAWL_INFO;
  async sourcing(productName: string): Promise<string> {
    try {
      this.goToBrowser(this.sourcingInfo.url);
      const beforeProccessing = this.searchProduct(productName);
      const afterProccessing = (await this.processingProduct(
        beforeProccessing,
      )) as ProductEntity[];
      return 'success';
    } catch (error) {
      return error;
    }
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
