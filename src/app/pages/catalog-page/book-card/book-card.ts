import {Component, Input, input} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-card',
  imports: [
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardHeader,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss'
})
export class BookCard {
  @Input() book: any;
}
