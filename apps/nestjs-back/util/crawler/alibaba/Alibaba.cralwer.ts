import { ICrawler, OrderInfo, SourcingInfo } from '../interface';

export class AlibabaCrawler implements ICrawler {
  sourcingInfo: SourcingInfo;
  sourcing(productName: string): Promise<string> {
    return Promise.resolve(`sourcing ${productName} from alibaba`);
  }
  orderCrawlInfo: OrderInfo;
  order(orderNumber: number, product: string): Promise<string> {
    return Promise.resolve(`order ${product} from alibaba`);
  }
}
