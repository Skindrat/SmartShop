import { Injectable } from '@angular/core';
import { BucketItem } from '../models/bucketItem';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class BucketService {

  private bucket: BucketItem[] = new Array<BucketItem>();

  addItem(product: Product, quantity: number) {
    this.bucket.push({
      product,
      quantity
    });
  }
  getBucketItems() {
    return this.bucket;
  }
}
