import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LegalEntitiesModule } from '../legal-entities/legal-entities.module';
import { ContractsModule } from '../contracts/contracts.module';
import { FilesModule } from '../files/files.module';
import { AccountingDocumentsModule } from '../accounting-documents/accounting-documents.module';

@Module({
  imports: [
    LegalEntitiesModule,
    ContractsModule,
    FilesModule,
    AccountingDocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}