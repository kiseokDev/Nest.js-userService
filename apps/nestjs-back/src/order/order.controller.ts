import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { ProductEntity } from '../product/entities/product.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //   @Post()
  //   orderProduct(
  //     @Body('orderNumber') orderNumber: number,
  //     @Body('product') product: ProductEntity,
  //     @Body('providerName') providerName: string,
  //   ) {
  //     return this.orderService.orderProduct(orderNumber, product, providerName);
  //   }
}
