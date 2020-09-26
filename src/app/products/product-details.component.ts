import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import {IProduct} from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'PRoduct Details: ';
  errorMessage = '';
  product: IProduct |undefined;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService
    ) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    const id = +param;
    this.getProduct(id);

  }

  getProduct(id: number): void{
     this.productService.getProduct(id).subscribe({
      next: product => this.product = product
    });
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }

}
