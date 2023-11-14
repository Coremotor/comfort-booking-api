import { Test, TestingModule } from '@nestjs/testing';
import { AccountingDocumentsController } from './accounting-documents.controller';
import { AccountingDocumentsService } from './accounting-documents.service';

describe('AccountingDocumentsController', () => {
  let controller: AccountingDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountingDocumentsController],
      providers: [AccountingDocumentsService],
    }).compile();

    controller = module.get<AccountingDocumentsController>(AccountingDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
