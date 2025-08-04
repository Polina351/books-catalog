import {ChangeDetectorRef, Component} from '@angular/core';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {FormBuilder, FormsModule} from '@angular/forms';
import {BookCard} from './book-card/book-card';
import books from '../../../../public/assets/books.json';
import {MatDialog} from '@angular/material/dialog';
import {AddBookDialog} from './add-book-dialog/add-book-dialog';
import { Book } from '../../models/book.model'

@Component({
  selector: 'app-catalog-page',
  imports: [
    MatLabel,
    MatFormField,
    MatLabel,
    MatFormField,
    MatFormField,
    MatFormField,
    MatInput,
    MatIcon,
    FormsModule,
    BookCard,
    MatFabButton
  ],
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.scss'
})
export class CatalogPage {
  searchText: string = '';

  books: Book[] = books;

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef


  ) {
  }



  get filteredBooks(): Book[] {
    if (!this.searchText.trim()) {
      return this.books;
    }

    const query: string = this.searchText.toLowerCase();
    return this.books.filter((book: Book) =>
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    );
  }

  protected openAddBookDialog(): void {
    const dialogRef = this.dialog.open(AddBookDialog, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe((result: Book) => {
      if (result) {
        this.books = [...this.books, result];
        this.cdr.detectChanges();
      }
    });
  }

}
