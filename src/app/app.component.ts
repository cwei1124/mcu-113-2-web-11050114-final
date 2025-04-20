import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
