import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sinonsrt:bCfWIdsPK4tHA5Ps@crud-nestjs.g6vho.mongodb.net/test',
    ),
    CarsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
