import { Injectable } from '@nestjs/common';
import { contracts } from './initial-data/contracts';
import { ContractConditionStatusEnum, ContractStatusEnum } from './types/enums';

@Injectable()
export class ContractsService {
  private contracts = contracts;

  findAll() {
    return this.contracts;
    // return [{ ...this.contract }];
  }

  editContractStatus(body) {
    const { contractId, status } = body;
    this.contracts = this.contracts.map((contract) => {
      if (contract.contractId === contractId) {
        return { ...contract, contractStatus: status };
      } else {
        return contract;
      }
    });
  }

  editConditionsStatus(body) {
    const { contractId, status, conditionsId } = body;

    const contract = this.contracts.find(
      (contract) => contract.contractId === contractId,
    );

    const editedContractConditions = contract.contractConditions.map(
      (conditions) => {
        if (conditions.id === conditionsId) {
          return { ...conditions, status: status };
        } else {
          return conditions;
        }
      },
    );

    const editedContract = {
      ...contract,
      contractConditions: editedContractConditions,
    };

    this.contracts = this.contracts.map((contract) => {
      if (contract.contractId === editedContract.contractId) {
        return editedContract;
      } else {
        return contract;
      }
    });

    if (status === ContractConditionStatusEnum.Active)
      this.editContractStatus({
        contractId,
        status: ContractStatusEnum.Active,
      });
  }

  resetStatus() {
    this.contracts = contracts;
  }
}
