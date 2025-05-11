import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/Constants';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'

})
export class ProductService {

  private productUrl = environment.API_BASE_URL;
  private userUrl = environment.API_USER_URL;
 
  constructor(private http: HttpClient) {
    
   }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl + Constant.METHODS.GET_ALL_PRODUCT);
  }

  getProductById(productId: number): Observable<any[]> {
    return this.http.get<any[]>(this.productUrl + Constant.METHODS.GET_PRODUCT_BY_ID + productId);
  }



}
