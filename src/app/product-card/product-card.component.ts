import { CurrencyPipe } from '@angular/common';
import { Component, HostBinding, input, model, numberAttribute, output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly id = input.required<string>();

  readonly productName = input<string>();

  readonly authors = input<string[]>();

  readonly company = input<string>();

  readonly photoUrl = input<string>();

  readonly price = input<number, string | number>(0, { transform: numberAttribute });

  readonly view = output<void>();

  readonly isShow = model.required<boolean>();

  readonly discount = model.required<boolean>();

  readonly addToCart = output<void>();

  @HostBinding('class')
  class = 'app-product-card';
}
