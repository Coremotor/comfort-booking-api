import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountingDocumentDto } from './create-accounting-document.dto';

export class UpdateAccountingDocumentDto extends PartialType(CreateAccountingDocumentDto) {}
