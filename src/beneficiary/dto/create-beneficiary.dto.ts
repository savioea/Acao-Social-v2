import { Adress } from 'src/common/Adress.class';

export class CreateBeneficiaryDto {
  readonly name: string;

  readonly cpf: string;

  readonly tel: string;

  readonly bornDate: Date;

  readonly peopleNumber: number;

  readonly adress: Adress;
}
