import { Controller, Get } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('/v1/documents/info')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }
}
