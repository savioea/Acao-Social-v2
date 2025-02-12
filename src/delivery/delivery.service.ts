import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Delivery } from './schemas/delivery.entity';
import { Model } from 'mongoose';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(Delivery.name) private deliveryModel: Model<Delivery>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto) {
    const newDelivery = await this.deliveryModel.create(createDeliveryDto);
    return await newDelivery.save();
  }

  async findAll() {
    return await this.deliveryModel.find();
  }

  async findOne(id: string) {
    return await this.deliveryModel.findById(id);
  }

  async update(id: string, updateDeliveryDto: UpdateDeliveryDto) {
    const deliveryToBeUpdated = await this.deliveryModel.findById(id);

    if (deliveryToBeUpdated)
      await this.deliveryModel.findByIdAndUpdate(id, updateDeliveryDto).exec();
    return this.deliveryModel.findById(id);
  }

  async remove(id: string) {
    const deliveryToBeRemoved = await this.deliveryModel.findById(id);

    if (deliveryToBeRemoved)
      return await this.deliveryModel.findByIdAndDelete(id).exec();
  }
}
