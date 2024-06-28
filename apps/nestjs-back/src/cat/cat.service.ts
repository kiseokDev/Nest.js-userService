import { CatsInput } from './schema/cat.entities';
import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schema/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}
  create(createCatDto: CreateCatDto | CatsInput) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  findAll() {
    return this.catModel.find().exec();
  }

  findOne(id: string) {
    return this.catModel.findById(id).exec();
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return this.catModel.findByIdAndUpdate(id, updateCatDto).exec();
  }

  remove(id: number) {
    return this.catModel.findByIdAndUpdate(id, { isDeleted: true }).exec();
  }
}
