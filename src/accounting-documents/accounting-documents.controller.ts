import { Controller, Get, Header, Param, Query } from '@nestjs/common';
import { AccountingDocumentsService } from './accounting-documents.service';

@Controller('/v1/documents')
export class AccountingDocumentsController {
  constructor(
    private readonly accountingDocumentsService: AccountingDocumentsService,
  ) {}

  @Get('/accounting-documents')
  findAccountingDocuments(@Query() query) {
    return this.accountingDocumentsService.findAccountingDocuments(query);
  }

  @Get('/operations-documents')
  findOperationsDocuments(@Query() query) {
    return this.accountingDocumentsService.findOperationsDocuments(query);
  }

  @Get('/download-in-archive')
  @Header('Content-Type', 'application/zip')
  @Header('Content-Disposition', 'attachment; filename="archive.zip"')
  getZipFile(@Query() query) {
    console.log(query);
    return this.accountingDocumentsService.getStreamableFileZip();
  }

  @Get('/acts/:actId')
  @Header('Content-Type', 'application/pdf')
  getAct(@Param('actId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFilePdf();
  }

  @Get('/agent-reports/:agentReportId')
  @Header('Content-Type', 'application/pdf')
  getAgentReport(@Param('agentReportId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFilePdf();
  }

  @Get('/proforma-invoices/:proformaInvoiceId')
  @Header('Content-Type', 'application/pdf')
  getProformaInvoice(@Param('proformaInvoiceId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFilePdf();
  }

  @Get('/payment-system-acts/:paymentSystemActId')
  @Header('Content-Type', 'application/pdf')
  getPaymentSystemAct(@Param('paymentSystemActId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFilePdf();
  }

  @Get('/payment-system-operation-reports/:paymentSystemOperationReportId')
  @Header('Content-Type', 'application/vnd.ms-excel')
  getPaymentSystemOperationReport(
    @Param('paymentSystemOperationReportId') id: string,
  ) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFileXls();
  }

  @Get('/daily-register/:dailyRegisterId')
  @Header('Content-Type', 'application/vnd.ms-excel')
  getDailyRegister(@Param('dailyRegisterId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFileXls();
  }

  @Get('/operations-report/:operationsReportId')
  @Header('Content-Type', 'application/vnd.ms-excel')
  getOperationsReport(@Param('operationsReportId') id: string) {
    console.log(id);
    return this.accountingDocumentsService.getStreamableFileXls();
  }
}
