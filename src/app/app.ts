import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CatalogPage} from './pages/catalog-page/catalog-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'books-catalog';
}
