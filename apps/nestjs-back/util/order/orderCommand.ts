import { ProductEntity } from 'apps/nestjs-back/src/product/entities/product.entity';
import { IOrder } from './Order.interface';

export class OrderCommand {
  protected crawler: IOrder;
  setOrderCommand(crawler: IOrder) {
    this.crawler = crawler;
  }
  async orderProduct(
    orderNumber: number,
    product: ProductEntity,
  ): Promise<string> {
    return await this.crawler.orderProductByCrawling(orderNumber, product);
  }
}
