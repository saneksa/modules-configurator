import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { Module, ModuleDocument } from './schemas/module.schema';

@Injectable()
export class ModulesService {
  constructor(
    @InjectModel(Module.name) private moduleModel: Model<ModuleDocument>,
  ) {}

  async create(createModuleDto: CreateModuleDto) {
    const createdModule = new this.moduleModel(createModuleDto);
    return createdModule.save();
  }

  async findAll() {
    return this.moduleModel.find().exec();
  }

  async findOne(id: string) {
    return this.moduleModel.findById(id).exec();
  }

  async update(id: string, updateModuleDto: UpdateModuleDto) {
    return this.moduleModel.findByIdAndUpdate(id, updateModuleDto).exec();
  }

  async remove(id: string) {
    return this.moduleModel.findByIdAndRemove(id).exec();
  }
}
