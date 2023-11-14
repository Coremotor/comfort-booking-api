import { Module } from '@nestjs/common';
import { LegalEntitiesService } from './legal-entities.service';
import { LegalEntitiesController } from './legal-entities.controller';

@Module({
  controllers: [LegalEntitiesController],
  providers: [LegalEntitiesService],
})
export class LegalEntitiesModule {}
