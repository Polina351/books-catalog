import { Routes } from '@angular/router';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { BookDetails } from './pages/book-details/book-details';

export const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogPage
  },
  {
    path: 'details',
    component: BookDetails
  },
  {
    path: '',
    redirectTo: '/catalog',
    pathMatch: 'full',
  }
];
