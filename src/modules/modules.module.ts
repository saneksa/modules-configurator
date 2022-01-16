import { Module as NestModule } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { ModuleSchema, Module } from './schemas/module.schema';
import { MongooseModule } from '@nestjs/mongoose';

@NestModule({
  imports: [
    MongooseModule.forFeature([{ name: Module.name, schema: ModuleSchema }]),
  ],
  controllers: [ModulesController],
  providers: [ModulesService],
})
export class ModulesModule {}
