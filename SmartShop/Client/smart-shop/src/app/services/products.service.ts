import {Injectable, Inject} from '@angular/core';
import { Product } from '../models/product';
import { Logger } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];
  constructor(@Inject('BASE_URL') private baseUrl: string, private logger: Logger, private httpClient : HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products');
  }

  addProduct(newProduct: Product) {
    this.logger.log('new product was added');
    this.products.push(newProduct);
  }
}
