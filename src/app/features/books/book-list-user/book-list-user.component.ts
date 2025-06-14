import {Component, OnInit} from '@angular/core';
import {Book, BookService} from '../../../core/book.service';
import {Router} from '@angular/router';
import {CurrencyPipe} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatMiniFabButton} from '@angular/material/button';

@Component({
  selector: 'app-book-list-user',
  standalone: true,
  imports: [
    MatIcon,
    CurrencyPipe,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatMiniFabButton
  ],
  templateUrl: './book-list-user.component.html',
  styleUrl: './book-list-user.component.scss'
})
export class BookListUserComponent implements OnInit {

  books: Book[] = [];
  constructor(private bookService: BookService, private router: Router) {
  }


  ngOnInit() :void {
    this.bookService.getBooks().subscribe(data => this.books = data);
  }

  goToDetail(bookId: number): void {
    this.router.navigate(['/books/book-detail-user', bookId]);
  }

  addToCart(book: Book): void {
    // TODO: Warenkorb-Service nutzen
    console.log('Zum Warenkorb hinzugefügt:', book);
  }
}
