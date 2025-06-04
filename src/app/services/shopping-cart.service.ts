import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingItem } from '../models/shopping-item';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  [x: string]: any;
  data: ShoppingItem[] = [];

  addProduct(product: Product): void {
    const item = this.data.find((x) => x.product.id === product.id);

    if (item) {
      item.count++;
    } else {
      const id = this.data.length === 0 ? 1 : Math.max(...this.data.map((item) => item.id)) + 1;
      this.data.push(new ShoppingItem({ id, product, count: 1 }));
    }
  }

  removeItem(productId: number): void {
    this.data = this.data.filter((item) => item.id !== productId);
  }
}
