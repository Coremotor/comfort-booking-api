import { Module } from '@nestjs/common';
import { AccountingDocumentsService } from './accounting-documents.service';
import { AccountingDocumentsController } from './accounting-documents.controller';

@Module({
  controllers: [AccountingDocumentsController],
  providers: [AccountingDocumentsService],
})
export class AccountingDocumentsModule {}
