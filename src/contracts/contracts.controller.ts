import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('/v1/documents/info')
export class ContractsController {
  constructor(private readonly contractsService: ContractsService) {}

  @Get()
  findAll() {
    return this.contractsService.findAll();
  }

  @Post()
  editStatus(@Body() body) {
    return this.contractsService.editStatus(body);
  }

  @Post('/reset')
  resetStatus() {
    return this.contractsService.resetStatus();
  }
}
