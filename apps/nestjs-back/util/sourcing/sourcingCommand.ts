import { ISourcing } from './sourcing.interface';

export class SourcingCommand {
  protected cralwer: ISourcing;

  setSupplyCrawler(cralwer: ISourcing) {
    this.cralwer = cralwer;
  }

  crawl(productName: string): Promise<string> {
    return this.cralwer.sourcing(productName);
  }
}
