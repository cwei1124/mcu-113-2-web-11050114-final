import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'products' },
  { path: 'products', component: ProductPageComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
];
