import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegalEntitiesService } from './legal-entities.service';
import { CreateLegalEntityDto } from './dto/create-legal-entity.dto';
import { UpdateLegalEntityDto } from './dto/update-legal-entity.dto';

@Controller('legal-entities')
export class LegalEntitiesController {
  constructor(private readonly legalEntitiesService: LegalEntitiesService) {}

  @Post()
  create(@Body() createLegalEntityDto: CreateLegalEntityDto) {
    return this.legalEntitiesService.create(createLegalEntityDto);
  }

  @Get()
  findAll() {
    return this.legalEntitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legalEntitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegalEntityDto: UpdateLegalEntityDto) {
    return this.legalEntitiesService.update(+id, updateLegalEntityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legalEntitiesService.remove(+id);
  }
}
