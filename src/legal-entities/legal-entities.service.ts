import { Injectable } from '@nestjs/common';
import { legalEntities } from './initial-data/legal-entities';

@Injectable()
export class LegalEntitiesService {
  private readonly legalEntities = legalEntities;

  findAll() {
    return this.legalEntities;
  }
}
