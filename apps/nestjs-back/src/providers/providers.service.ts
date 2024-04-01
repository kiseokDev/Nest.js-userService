import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ProviderEntity } from './entities/provider.entity';
import { Model } from 'mongoose';
import { CrawlProductClient } from 'apps/nestjs-back/util/providerCompany/client';
import { DomemeCrawler } from 'apps/nestjs-back/util/providerCompany/crawler/domeme/Domeme';
import { AbstractProductCrawler } from 'apps/nestjs-back/util/providerCompany/crawler/providerCrawler.interface';

@Injectable()
export class ProvidersService {
  constructor(
    private crawlProductClient: CrawlProductClient,
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
    this.crawlProductClient.setSupplyCrawler(cralwer);
    return this.crawlProductClient.crawl(productName);
  }

  buildCrawler(productName: string): AbstractProductCrawler {
    switch (productName) {
      case 'domeme':
        return new DomemeCrawler();
        break;
      default:
        throw new HttpException(
          '사용가능한 공급사가 아닙니다.',
          HttpStatus.BAD_REQUEST,
        );
    }
  }
}
