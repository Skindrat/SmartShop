import { Injectable } from '@angular/core';
import { BucketItem } from '../models/BucketItem';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class BucketService {
    
    private bucket: BucketItem[] = new Array<BucketItem>();;

    addItem(product: Product, quantity: number){
        this.bucket.push({
            product: product, 
            quantity: quantity
        });
    }

    getBucketItems(){
        return this.bucket;
    }

  }
