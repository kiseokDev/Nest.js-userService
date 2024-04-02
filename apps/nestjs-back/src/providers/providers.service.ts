import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProviderEntity } from './entities/provider.entity';
import { Model } from 'mongoose';
import { SourcingCommand } from 'apps/nestjs-back/util/sourcing/sourcingCommand';
import { DomemeSourcing } from 'apps/nestjs-back/util/sourcing/domeme/domemeSourcing';
import { ISourcing } from 'apps/nestjs-back/util/sourcing/sourcing.interface';
import { CrawlCommand } from 'apps/nestjs-back/util/crawler/crawlCommand';
import { ICrawler } from 'apps/nestjs-back/util/crawler/interface';
import { DomemeCrawler } from 'apps/nestjs-back/util/crawler/domeme/Domeme.crawler';
import { ProductEntity } from '../product/entities/product.entity';

@Injectable()
export class ProvidersService {
  constructor(
    private sourcingCommand: SourcingCommand,
    private crawlCommand: CrawlCommand,
    @InjectModel(ProviderEntity.name)
    private productModel: Model<ProviderEntity>,
  ) {}
  create(createProviderDto: CreateProviderDto) {
    return `${createProviderDto}This action adds a new provider`;
  }

  findAll() {
    return `This action returns all providers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id}:${updateProviderDto} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }

  crawlProduct(providerName: string, productName: string) {
    const cralwer = this.buildCrawler(providerName);
    this.sourcingCommand.setSupplyCrawler(cralwer);
    return this.sourcingCommand.crawl(productName);
  }

  buildCrawler(productName: string): ISourcing {
    switch (productName) {
      case 'domeme':
        return new DomemeSourcing();
      default:
        throw new HttpException(
          '사용가능한 공급사가 아닙니다.',
          HttpStatus.BAD_REQUEST,
        );
    }
  }

  buildCrawler222(productName: string): ICrawler {
    // switch (productName) {
    //   case 'domeme':
    //     return new DomemeSourcing();
    //   default:
    //     throw new HttpException(
    //       '사용가능한 공급사가 아닙니다.',
    //       HttpStatus.BAD_REQUEST,
    //     );
    // }
    switch (productName) {
      case 'domeme':
        return new DomemeCrawler();
    }
  }

  crawlProduct22(providerName: string, productName: string) {
    const cralwer = this.buildCrawler222(providerName);
    this.crawlCommand.setCrawler(cralwer);
    return this.crawlCommand.sourcing(productName);
  }

  orderProduct(
    orderNumber: number,
    product: string,
    providerName: string,
  ): Promise<string> {
    const orderCrawler = this.buildCrawler222(providerName);
    this.crawlCommand.setCrawler(orderCrawler);
    return this.crawlCommand.order(orderNumber, product);
  }
}
