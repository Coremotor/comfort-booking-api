import { Injectable } from '@nestjs/common';
import { contracts } from './initial-data/contracts';
import { ContractStatusEnum } from './types/enums';

@Injectable()
export class ContractsService {
  private readonly contracts = contracts;
  private contract = {
    contractId: 1,
    contractNumber: 'ТРКБ-23411 от 11.10.2020',
    contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    years: [2023, 2022, 2021, 2020],
    type: 'paper',
  };

  findAll() {
    // return this.contracts;
    return [{ ...this.contract }];
  }

  editStatus(body) {
    console.log('edit status', body);
    this.contract = { ...this.contract, contractStatus: body.status };
  }

  resetStatus() {
    this.contract = {
      ...this.contract,
      contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    };
  }
}
