import { Controller, Get } from '@nestjs/common';
import { LegalEntitiesService } from './legal-entities.service';

@Controller('/v1/legal-entities/available-legal-entities')
export class LegalEntitiesController {
  constructor(private readonly legalEntitiesService: LegalEntitiesService) {}

  @Get()
  findAll() {
    return this.legalEntitiesService.findAll();
  }
}
