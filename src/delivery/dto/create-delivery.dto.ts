import { Beneficiary } from 'src/beneficiary/schemas/beneficiary.schema';

export class CreateDeliveryDto {
  deliveriesNumber: number;

  createdAt: Date;

  beneficiaries: Beneficiary[];
}
