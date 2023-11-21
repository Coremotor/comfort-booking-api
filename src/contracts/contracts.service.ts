import { Injectable } from '@nestjs/common';
import { contracts } from './initial-data/contracts';

@Injectable()
export class ContractsService {
  private readonly contracts = contracts;

  findAll() {
    return this.contracts;
  }
}
