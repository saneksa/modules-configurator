import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesModule } from './modules/modules.module';
import * as dotenv from 'dotenv';

dotenv.config();

const { DB_USER_NAME, DB_PASSWORD, DB_NAME, DB_CLUSTER } = process.env;

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`,
    ),
    ModulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
