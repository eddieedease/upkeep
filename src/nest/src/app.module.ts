import { Module } from '@nestjs/common';
import { BookController } from './app.controller';
import { BooksSerivce } from './app.service';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BooksSerivce],
})
export class AppModule {}
