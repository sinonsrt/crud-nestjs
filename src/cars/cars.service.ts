import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car, CarDocument } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private carModel: Model<CarDocument>) {}

  create(createCarDto: CreateCarDto) {
    const car = new this.carModel(createCarDto);
    return car.save();
  }

  findAll() {
    return this.carModel.find();
  }

  findOne(id: string) {
    return this.carModel.findById(id);
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate(
      {
        _id: id, //id para encontrar
      },
      {
        $set: updateCarDto, //novos dados para alteração
      },
      {
        new: true, //para confirmar que eu quero alterar
      },
    );
  }

  remove(id: string) {
    return this.carModel
      .deleteOne({
        _id: id,
      })
      .exec(); //para executar a operação
  }
}
