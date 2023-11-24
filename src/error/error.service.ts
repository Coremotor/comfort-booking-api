import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateErrorDto } from './dto/create-error.dto';

@Injectable()
export class ErrorService {
  create(createErrorDto: CreateErrorDto) {
    switch (createErrorDto.statusCode) {
      case 500:
        throw new HttpException(
          'INTERNAL_SERVER_ERROR',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );

      case 400:
        throw new HttpException('BAD_REQUEST', HttpStatus.BAD_REQUEST);

      case 401:
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);

      case 403:
        throw new HttpException('FORBIDDEN', HttpStatus.FORBIDDEN);

      case 404:
        throw new HttpException('NOT_FOUND', HttpStatus.NOT_FOUND);
    }
  }
}
