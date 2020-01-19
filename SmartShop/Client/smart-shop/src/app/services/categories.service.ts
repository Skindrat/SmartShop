import { Category } from '../models/Category';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(@Inject('BASE_URL') private baseUrl: string, private httpClient: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + '/products');
  }
}
