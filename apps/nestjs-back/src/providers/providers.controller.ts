import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { ProductEntity } from '../product/entities/product.entity';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post()
  create(@Body() createProviderDto: CreateProviderDto) {
    return this.providersService.create(createProviderDto);
  }

  @Get()
  findAll() {
    return this.providersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProviderDto: UpdateProviderDto,
  ) {
    return this.providersService.update(+id, updateProviderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providersService.remove(+id);
  }

  @Post('source')
  crawlProduct(
    @Body('providerName') providerName: string,
    @Body('productName') productName: string,
  ) {
    return this.providersService.crawlProduct22(providerName, productName);
  }

  @Post('order')
  orderProduct(
    @Body('orderNumber') orderNumber: number,
    @Body('product') product: string,
    @Body('providerName') providerName: string,
  ) {
    return this.providersService.orderProduct(
      orderNumber,
      product,
      providerName,
    );
  }
}
