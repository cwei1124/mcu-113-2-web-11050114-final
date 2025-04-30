import { SearchComponent } from './../search/search.component';
import { Component, OnInit, inject } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-page',
  imports: [SearchComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  private router = inject(Router);

  private productService = inject(ProductService);

  products: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getList();
  }

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }
}
