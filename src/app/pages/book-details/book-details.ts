import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatLabel } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import {Book} from "../../models/book.model";

@Component({
  selector: 'app-book-details',
  imports: [
    MatButton,
    MatCardHeader,
    MatDivider,
    MatCardContent,
    MatCardActions,
    MatCard,
    MatIcon,
    MatCardTitle,
    MatCardSubtitle,
  ],
  templateUrl: './book-details.html',
  styleUrl: './book-details.scss'
})
export class BookDetails {
  book: Book;

  constructor(private router: Router) {
    this.book = history.state.book;
    if (!this.book) this.router.navigate(['/catalog']);
  }

  goBack() {
    this.router.navigate(['/catalog']);
  }
}
