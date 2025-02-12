import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Beneficiary } from 'src/beneficiary/schemas/beneficiary.schema';

export type DeliveryDocument = HydratedDocument<Delivery>;

@Schema()
export class Delivery {
  @Prop()
  deliveriesNumber: number;

  @Prop()
  createdAt: Date;

  @Prop([Beneficiary])
  beneficiaries: Beneficiary[];
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
