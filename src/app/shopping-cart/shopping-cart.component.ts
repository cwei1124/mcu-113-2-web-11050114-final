import { CurrencyPipe } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderForm } from '../interface/order-form';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Product } from '../models/product';
import { filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { OrderDetail } from '../models/order-detail';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss',
})
export class ShoppingCartComponent implements OnInit {
  private readonly router = inject(Router);

  readonly shoppingCartService = inject(ShoppingCartService);

  private readonly destroyRef = inject(DestroyRef);

  readonly orderService = inject(OrderService);

  form = new FormGroup({
    name: new FormControl<string | null>(null, { validators: [Validators.required] }),
    address: new FormControl<string | null>(null, { validators: [Validators.required] }),
    phone: new FormControl<string | null>(null, { validators: [Validators.required] }),
    details: new FormArray<FormGroup<OrderForm>>([]),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phone(): FormControl<string | null> {
    return this.form.get('phone') as FormControl<string | null>;
  }

  get details(): FormArray<FormGroup<OrderForm>> {
    return this.form.get('details') as FormArray<FormGroup<OrderForm>>;
  }

  totalPrice = 0;

  get formData(): Order {
    return new Order({
      name: this.name.value!,
      address: this.address.value!,
      phone: this.phone.value!,
      details: this.details.value.map((item) => new OrderDetail(item)),
    });
  }

  ngOnInit(): void {
    this.setOrderDetail();
    this.setupTotalPriceCalculation();
  }

  setOrderDetail() {
    for (const item of this.shoppingCartService.data) {
      const control = new FormGroup<OrderForm>({
        id: new FormControl<number>(item.id, { nonNullable: true }),
        product: new FormControl<Product>(item.product, { nonNullable: true }),
        count: new FormControl<number>(item.count, { nonNullable: true, validators: [Validators.min(1)] }),
        price: new FormControl<number>(item.product.price * item.count, { nonNullable: true }),
      });

      control
        .get('count')
        ?.valueChanges.pipe(
          filter((value) => value !== null),
          map((value) => value * item.product.price),
          takeUntilDestroyed(this.destroyRef)
        )
        .subscribe((price) => control.get('price')?.setValue(price, { emitEvent: false }));

      this.details.push(control);
    }
  }

  setupTotalPriceCalculation(): void {
    this.details.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.totalPrice = value.reduce((sum, { price }) => {
        return sum + (price ?? 0);
      }, 0);
    });
    this.totalPrice = this.details.getRawValue().reduce((sum, { price }) => {
      return sum + (price ?? 0);
    }, 0);
  }

  onRemoveItem(index: number): void {
    const itemToRemove = this.details.at(index).getRawValue();
    if (itemToRemove.id) {
      this.shoppingCartService.removeItem(itemToRemove.id);
      this.details.removeAt(index);
    }
  }

  onSave(): void {
    console.log('Save');

    this.orderService.add(this.formData).subscribe(() => {
      this.shoppingCartService.clear();
      this.router.navigate(['/']);
    });
  }
}
