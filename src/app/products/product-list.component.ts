import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  // selector: 'app-products', --this is only require where nested component is using
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
  public pageTitle = 'Product Lists';
  public showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  imageWidth = 50;
  imageMargin = 2;

  constructor(private productService: ProductService) { }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void{
    this.pageTitle = `Product list: ${message}`;
  }

  ngOnInit(): void{
    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      }
    });
  }
}
