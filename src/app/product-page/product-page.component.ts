import { SearchComponent } from './../search/search.component';
import { Component, OnInit, inject } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-product-page',
  imports: [SearchComponent, PaginationComponent, ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent implements OnInit {
  private router = inject(Router);

  private productService = inject(ProductService);

  pageIndex = 1;

  pageSize = 5;

  totalCount = 0;

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  onView(product: Product): void {
    this.router.navigate(['product', product.id]);
  }

  onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex;
    this.getProducts();
  }

  private getProducts(): void {
    const { data, count } = this.productService.getList(undefined, this.pageIndex, this.pageSize);
    this.products = data;
    this.totalCount = count;
  }
}
