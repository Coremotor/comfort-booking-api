import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountingDocumentsService } from './accounting-documents.service';
import { CreateAccountingDocumentDto } from './dto/create-accounting-document.dto';
import { UpdateAccountingDocumentDto } from './dto/update-accounting-document.dto';

@Controller('accounting-documents')
export class AccountingDocumentsController {
  constructor(private readonly accountingDocumentsService: AccountingDocumentsService) {}

  @Post()
  create(@Body() createAccountingDocumentDto: CreateAccountingDocumentDto) {
    return this.accountingDocumentsService.create(createAccountingDocumentDto);
  }

  @Get()
  findAll() {
    return this.accountingDocumentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountingDocumentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountingDocumentDto: UpdateAccountingDocumentDto) {
    return this.accountingDocumentsService.update(+id, updateAccountingDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountingDocumentsService.remove(+id);
  }
}
