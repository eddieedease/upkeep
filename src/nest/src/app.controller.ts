import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BooksSerivce } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BookController {
  constructor(private readonly booksService: BooksSerivce) {}

  // get all
  @Get()
  getAllBooks(): Book[] {
    return this.booksService.getAllBooks();
  }

  // get by id
  @Get('getById/:id')
  getBookById(@Param('id') id: string): Book | undefined {
    const bookID = +id;
    return this.booksService.findById(bookID);
  }

  // update
  @Post('addbook')
  addBook(@Body() book: Partial<Book>): Book {
    const bookData = book;

    if (!book.author || !book.title || !book.publicationYear) return undefined;
    return this.booksService.createBook(bookData);
  }

}
