export interface OrderInfo {
  url: string;
  loginUrl: string;
  searchUrl: string;
  productName: string;
  productUrl: string;
  price: string;
  description: string;
  images: string[];
}

export interface SourcingInfo {
  url: string;
  loginUrl: string;
  searchUrl: string;
  productName: string;
  productUrl: string;
  price: string;
  description: string;
  images: string[];
}

export interface ISourcing {
  sourcingInfo: SourcingInfo;
  sourcing(productName: string): Promise<string>;
}

export interface IOrder {
  orderCrawlInfo: OrderInfo;
  order(orderNumber: number, product: string): Promise<string>;
}

export interface ICrawler extends ISourcing, IOrder {}
