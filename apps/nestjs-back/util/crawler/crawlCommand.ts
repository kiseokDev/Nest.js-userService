import { ICrawler } from './interface';

export class CrawlCommand {
  private crawler: any;
  constructor() {
    this.crawler = null;
  }
  setCrawler(crawler: ICrawler) {
    this.crawler = crawler;
  }
  sourcing(productName: string): Promise<string> {
    return this.crawler.sourcing(productName);
  }
  order(orderNumber: number, product: string): Promise<string> {
    return this.crawler.order(orderNumber, product);
  }
}
