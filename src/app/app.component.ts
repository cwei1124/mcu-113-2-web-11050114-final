import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  productName = 'A 產品';
  author = '作者A、作者B、作者C';
  company = '博碩文化';

  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';
}
