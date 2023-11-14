import { Injectable, StreamableFile } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { createReadStream } from 'fs';
import { join } from 'path';

@Injectable()
export class FilesService {
  create(createFileDto: CreateFileDto) {
    console.log('log');
    return 'This action adds a new file';
  }

  findAll() {
    return `This action returns all files`;
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }

  getStreamableFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'test-zip.zip'));
    console.log('getStreamableFile');
    return new StreamableFile(file);
  }
}
