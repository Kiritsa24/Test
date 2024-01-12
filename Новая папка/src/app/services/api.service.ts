import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


export interface PaginatedList<T> {
  items: T[];
  totalCount: number;
}

export interface Product {
  categoryId: number;
  name: string;
  categoryName: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(): Observable<PaginatedList<Product>>{
    const url = environment.apiUrl + 'Product';
    /*return this.http.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }))*/
    const params = new HttpParams();
    return this.http.get<PaginatedList<Product>>(url, {params});
  }


  getProductPopular(): Observable<PaginatedList<Product>>{
    const url = environment.apiUrl + 'Product/Popular';
    const params = new HttpParams();
    return this.http.get<PaginatedList<Product>>(url, {params});
  }

  
}
