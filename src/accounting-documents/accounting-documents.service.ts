import { Injectable, StreamableFile } from '@nestjs/common';

import { accounting_documents } from './initial-data/accounting-documents';
import { generateOperationsDocuments } from './initial-data/operations_documents';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class AccountingDocumentsService {
  findAccountingDocuments(query) {
    const { contractId, period } = query;
    console.log(contractId, period);
    return accounting_documents(period, contractId);
  }

  findOperationsDocuments(query) {
    const { contractId, period } = query;
    console.log(contractId, period);
    return generateOperationsDocuments(period, contractId);
  }

  getStreamableFileZip(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'files/test-zip.zip'));
    return new StreamableFile(file);
  }

  getStreamableFilePdf(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'files/pdf-test.pdf'));
    return new StreamableFile(file);
  }

  getStreamableFileXls(): StreamableFile {
    const file = createReadStream(
      join(process.cwd(), 'files/tests-example.xls'),
    );
    return new StreamableFile(file);
  }
}
