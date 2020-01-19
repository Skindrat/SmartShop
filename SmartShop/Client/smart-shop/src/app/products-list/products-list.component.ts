import { AlertService } from './../services/alert.service';
import {

  ProductsService,
} from '../services/products.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Product } from '../models/Product';
import { UserService } from '../services/user.service';
import { Logger } from '../services/logger.service';
import { BucketService } from '../services/bucket.service';
import { AlertStatus } from '../models/alerts/alert-status';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];
  constructor( private logger: Logger, private productsService: ProductsService, private bucketService: BucketService,
               private alertService: AlertService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  obAddToBucket(productToBuy: Product){
    this.logger.log('product was added to the bucket');

    this.bucketService.addItem(productToBuy, 1);
    this.alertService.alert('Product was added to the bucket!', AlertStatus.success);
  }

}
