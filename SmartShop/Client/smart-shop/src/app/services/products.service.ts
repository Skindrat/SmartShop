import {Injectable, Inject} from '@angular/core';
import { Product } from '../models/product';
import { Logger } from './logger.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private logger: Logger, private httpClient: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products');
  }

  getProductsCount(): number {
    return 6;
  }

  getProductByCategory(categoryId: number, page: number, maxItemsPerPage: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + `/categories/${ categoryId }/products?_page=${ page }` +
      `&_limit=${ maxItemsPerPage }`);
  }

  addProduct(newProduct: Product) {
  }
}
