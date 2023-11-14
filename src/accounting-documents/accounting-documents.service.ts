import { Injectable } from '@nestjs/common';
import { CreateAccountingDocumentDto } from './dto/create-accounting-document.dto';
import { UpdateAccountingDocumentDto } from './dto/update-accounting-document.dto';
import { accounting_documents } from './initial-data/accounting-documents';

@Injectable()
export class AccountingDocumentsService {
  private readonly accounting_documents = accounting_documents;
  create(createAccountingDocumentDto: CreateAccountingDocumentDto) {
    return 'This action adds a new accountingDocument';
  }

  findAll() {
    return this.accounting_documents;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountingDocument`;
  }

  update(id: number, updateAccountingDocumentDto: UpdateAccountingDocumentDto) {
    return `This action updates a #${id} accountingDocument`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountingDocument`;
  }
}
