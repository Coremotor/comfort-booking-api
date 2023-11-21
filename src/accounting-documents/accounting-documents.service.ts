import { Injectable, StreamableFile } from '@nestjs/common';

import { accounting_documents } from './initial-data/accounting-documents';
import { operations_documents } from './initial-data/operations_documents';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AccountingDocumentsService {
  private readonly accounting_documents = accounting_documents;
  private readonly operations_documents = operations_documents;

  findAccountingDocuments() {
    return this.accounting_documents;
  }

  findOperationsDocuments() {
    return this.operations_documents;
  }

  getStreamableFileZip(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'test-zip.zip'));
    return new StreamableFile(file);
  }

  getStreamableFilePdf(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'pdf-test.pdf'));
    return new StreamableFile(file);
  }

  getStreamableFileXls(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'tests-example.xls'));
    return new StreamableFile(file);
  }
}
