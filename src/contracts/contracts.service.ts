import { Injectable } from '@nestjs/common';
import { contracts } from './initial-data/contracts';

@Injectable()
export class ContractsService {
  private contracts = contracts;

  findAll() {
    return this.contracts;
    // return [{ ...this.contract }];
  }

  editStatus(body) {
    const { contractId, status } = body;
    this.contracts = this.contracts.map((contract) => {
      if (contract.contractId === contractId) {
        return { ...contract, contractStatus: status };
      } else {
        return contract;
      }
    });
  }

  resetStatus() {
    // this.contract = {
    //   ...this.contract,
    //   contractStatus: ContractStatusEnum.ContractDataConfirmWaiting,
    // };
    this.contracts = contracts;
  }
}
