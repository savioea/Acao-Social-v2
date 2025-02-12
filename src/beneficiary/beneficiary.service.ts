import { Injectable } from '@nestjs/common';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
import { Beneficiary } from './schemas/beneficiary.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BeneficiaryService {
  constructor(
    @InjectModel(Beneficiary.name) private beneficiaryModel: Model<Beneficiary>,
  ) {}

  async create(createBeneficiaryDto: CreateBeneficiaryDto) {
    const createdBenficiary = new this.beneficiaryModel(createBeneficiaryDto);
    return await createdBenficiary.save();
  }

  async findAll() {
    return await this.beneficiaryModel.find().exec();
  }

  async findOne(id: string) {
    return await this.beneficiaryModel.findById(id).exec();
  }

  async update(id: string, updateBeneficiaryDto: UpdateBeneficiaryDto) {
    const beneficiaryToBeupdated = await this.beneficiaryModel.findById(id);

    if (beneficiaryToBeupdated) {
      await this.beneficiaryModel.findByIdAndUpdate(id, updateBeneficiaryDto);
      return await this.beneficiaryModel.findById(id).exec();
    }
  }

  async remove(id: string) {
    const beneficiaryToBeRemoved = await this.beneficiaryModel.findById(id);

    if (beneficiaryToBeRemoved) {
      return await this.beneficiaryModel.findByIdAndDelete(id).exec();
    }
  }
}
