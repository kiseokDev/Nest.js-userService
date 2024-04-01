import { ProductEntity } from 'apps/nestjs-back/src/product/entities/product.entity';

export interface IOrder {
  orderCrawlInfo: OrderCrawlInfo;
  orderProductByCrawling(
    orderNumber: number,
    product: ProductEntity,
  ): Promise<string>;
}

export interface OrderCrawlInfo {
  url: string;
  name: string;
  description: string;
  test: string;
}
