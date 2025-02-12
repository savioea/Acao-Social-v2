import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Adress } from 'src/common/Adress.class';

export type BeneficiaryDocument = HydratedDocument<Beneficiary>;

@Schema()
export class Beneficiary {
  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  tel: string;

  @Prop()
  bornDate: Date;

  @Prop()
  peopleNumber: number;

  @Prop()
  adress: Adress;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const BeneficiarySchema = SchemaFactory.createForClass(Beneficiary);
