import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  // private productUrl = 'assets/products/products.json';
  private productUrl = 'api/products/products.json';

  constructor(private http: HttpClient){}

  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }

  getProduct(id: number): Observable<IProduct | undefined>{
    return this.getProducts().pipe(
      map((products: IProduct[]) => products.find(p => p.productId === id))
    );
  }
}
