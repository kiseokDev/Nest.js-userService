import { ProductEntity } from 'apps/nestjs-back/src/product/entities/product.entity';
import {
  ICrawler,
  IOrder,
  ISourcing,
  OrderInfo,
  SourcingInfo,
} from '../interface';

export class DomemeCrawler implements ICrawler {
  orderCrawlInfo: OrderInfo = DOMEME_ORDER_INFO;
  sourcingInfo: SourcingInfo = DOMEME_SOURCING_INFO;

  sourcing(productName: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('successSourcing');
    });
  }
  order(orderNumber: number, product: string): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('successOrder');
    });
  }
}

export const DOMEME_SOURCING_INFO: OrderInfo = {
  loginUrl: 'https://www.domeme.co.kr/login',
  url: 'https://www.domeme.co.kr',
  searchUrl: 'https://www.domeme.co.kr/search?q=',
  productName: 'div.product-item__title',
  productUrl: 'a.product-item__link',
  price: 'span.product-item__price',
  description: 'div.product-item__description',
  images: ['img.product-item__image'],
};

export const DOMEME_ORDER_INFO: SourcingInfo = {
  loginUrl: 'https://www.domeme.co.kr/login',
  url: 'https://www.domeme.co.kr',
  searchUrl: 'https://www.domeme.co.kr/search?q=',
  productName: 'div.product-item__title',
  productUrl: 'a.product-item__link',
  price: 'span.product-item__price',
  description: 'div.product-item__description',
  images: ['img.product-item__image'],
};
