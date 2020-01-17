import {

  ProductsService,
} from './../shared/products.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Product } from '../models/Product';
import { UserService } from '../shared/user.service';
import { BucketService } from '../shared/bucket.service';
import { Logger } from '../shared/logger.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  constructor( private logger: Logger, private productsService: ProductsService, private bucketService: BucketService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  obAddToBucket(productToBuy: Product){
    this.logger.log('product was added to the bucket');

    this.bucketService.addItem(productToBuy, 1);
  }

}
