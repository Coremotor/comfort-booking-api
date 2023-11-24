import { Controller, Post, Body } from '@nestjs/common';
import { ErrorService } from './error.service';
import { CreateErrorDto } from './dto/create-error.dto';

@Controller('v1/error')
export class ErrorController {
  constructor(private readonly errorService: ErrorService) {}

  @Post()
  create(@Body() createErrorDto: CreateErrorDto) {
    console.log(createErrorDto);
    return this.errorService.create(createErrorDto);
  }
}
