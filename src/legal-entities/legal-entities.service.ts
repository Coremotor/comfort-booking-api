import { Injectable } from "@nestjs/common";
import { CreateLegalEntityDto } from './dto/create-legal-entity.dto';
import { UpdateLegalEntityDto } from './dto/update-legal-entity.dto';
import { legalEntities } from "./initial-data/legal-entities";

@Injectable()
export class LegalEntitiesService {
  private readonly legalEntities = legalEntities;
  create(createLegalEntityDto: CreateLegalEntityDto) {
    return 'This action adds a new legalEntity';
  }

  findAll() {
    return this.legalEntities;
  }

  findOne(id: number) {
    return `This action returns a #${id} legalEntity`;
  }

  update(id: number, updateLegalEntityDto: UpdateLegalEntityDto) {
    return `This action updates a #${id} legalEntity`;
  }

  remove(id: number) {
    return `This action removes a #${id} legalEntity`;
  }
}
