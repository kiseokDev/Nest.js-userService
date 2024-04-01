import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderCommand } from 'apps/nestjs-back/util/order/orderCommand';

@Module({
  controllers: [OrderController],
  providers: [OrderService, OrderCommand],
})
export class OrderModule {}
