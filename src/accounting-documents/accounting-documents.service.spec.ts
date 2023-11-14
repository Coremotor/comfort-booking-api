import { Test, TestingModule } from '@nestjs/testing';
import { AccountingDocumentsService } from './accounting-documents.service';

describe('AccountingDocumentsService', () => {
  let service: AccountingDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountingDocumentsService],
    }).compile();

    service = module.get<AccountingDocumentsService>(AccountingDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
