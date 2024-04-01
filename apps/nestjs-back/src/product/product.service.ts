import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UploadCommand } from 'apps/nestjs-back/util/upload/uploadCommand';
import { UPLOAD_PLATFORM } from 'apps/nestjs-back/util/upload/platFormEnum';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductEntity.name) private productModel: Model<ProductEntity>,
    private uploadCommand: UploadCommand,
  ) {}
  create(createProductDto: CreateProductDto) {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: number) {
    return this.productModel.findById(id).exec();
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, updateProductDto).exec();
  }

  remove(id: number) {
    return this.productModel.findByIdAndDelete(id, { isDeleted: true }).exec();
  }

  uploadProductToPlatform(platform: UPLOAD_PLATFORM, product: ProductEntity) {
    return this.uploadCommand.uploadProductToPlatform(platform, product);
  }
}
