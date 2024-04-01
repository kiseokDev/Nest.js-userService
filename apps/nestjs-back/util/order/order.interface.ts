import { ProductEntity } from 'apps/nestjs-back/src/product/entities/product.entity';

export interface IOrder {
  orderCrawlInfo: OrderInfo;
  order(orderNumber: number, product: ProductEntity): Promise<string>;
}

export interface OrderInfo {
  url: string;
  loginUrl: string;
  searchUrl: string;
  productName: string;
  productUrl: string;
  price: number;
  description: string;
  images: string[];
}
