import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../product/entities/product.entity';
import { OrderCommand } from 'apps/nestjs-back/util/order/orderCommand';
import { IOrder } from 'apps/nestjs-back/util/order/Order.interface';
import { DomemeOrder } from 'apps/nestjs-back/util/order/domeme/domemeOrder';

@Injectable()
export class OrderService {
  constructor(private orderCommand: OrderCommand) {}
  //async 없어도되는지 확인
  async orderProduct(
    orderNumber: number,
    product: ProductEntity,
    providerName: string,
  ): Promise<string> {
    const orderCrawler = this.buildOrderCrawler(providerName);
    this.orderCommand.setOrderCommand(orderCrawler);
    return await this.orderCommand.orderProduct(orderNumber, product);
  }

  buildOrderCrawler(providerName): IOrder {
    console.log('providerName', providerName);
    switch (providerName) {
      case 'domeme':
        return new DomemeOrder();
    }
  }
}
