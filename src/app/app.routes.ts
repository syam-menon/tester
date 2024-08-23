import { Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { PencilComponent } from './pencil/pencil.component';

export const routes: Routes = [
  { path: 'book', component: BookComponent, title: 'books' },
  { path: 'pencil', component: PencilComponent, title: 'Pencil' },
];
