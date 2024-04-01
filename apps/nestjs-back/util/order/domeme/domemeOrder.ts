import { ProductEntity } from 'apps/nestjs-back/src/product/entities/product.entity';
import { IOrder, OrderInfo } from '../order.interface';
import { domemeOrderInfo } from '../constant';

export class DomemeOrder implements IOrder {
  orderCrawlInfo: OrderInfo;
  OrderInfo: OrderInfo = domemeOrderInfo;
  async order(orderNumber: number, product: ProductEntity): Promise<string> {
    //TODO : template 디자인패턴으로 구현해 보기
    try {
      await this.goToBrowser();
      await this.login();
      await this.goToOrderPage();
      await this.orderProduct();
      console.log('orderNumber', orderNumber);
      console.log('product', product);
      return 'success';
    } catch (error) {
      return error;
    }
  }
  goToBrowser() {
    console.log('goToBrowser', this.OrderInfo.url);
  }
  login() {
    console.log('login', '도매메가 로그인');
  }
  goToOrderPage() {
    console.log('goToOrderPage', '도매메가 주문페이지로 이동');
  }
  orderProduct() {
    console.log('orderProduct', '도매메가 주문완료');
  }
}
