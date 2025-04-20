import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, ProductCardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  products: Product[] = [];

  setEmptyData(): void {
    this.products = [];
  }

  setHasData(): void {
    this.products = [
      new Product({
        id: 1,
        name: 'A 產品',
        authors: '作者A、作者B、作者C',
        company: '博碩文化',
        photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        price: 1580,
      }),
      new Product({
        id: 2,
        name: 'B 產品',
        authors: '作者A、作者B、作者C',
        company: '博碩文化',
        photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        price: 1580,
      }),
      new Product({
        id: 3,
        name: 'C 產品',
        authors: '作者A、作者B、作者C',
        company: '博碩文化',
        photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        price: 1580,
      }),
      new Product({
        id: 4,
        name: 'D 產品',
        authors: '作者A、作者B、作者C',
        company: '博碩文化',
        photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        price: 1580,
      }),
      new Product({
        id: 5,
        name: 'E 產品',
        authors: '作者A、作者B、作者C',
        company: '博碩文化',
        photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
        price: 1580,
      }),
    ];
  }
}
