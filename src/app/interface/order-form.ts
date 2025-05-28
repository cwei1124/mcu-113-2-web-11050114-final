import { FormControl } from '@angular/forms';
import { Product } from '../models/product';

export interface OrderForm {
  id: FormControl<number>;
  product: FormControl<Product>;
  count: FormControl<number>;
  price: FormControl<number>;
}
