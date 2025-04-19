import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mcu-113-2-web-11050114-final';
}
