import { AlertService } from '../../../services/alert.service';
import { ProductsService } from '../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';
import { Logger } from '../../../services/logger.service';
import { BucketService } from '../../../services/bucket.service';
import { AlertStatus } from '../../../models/alerts/alert-status.enum';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private logger: Logger, private productsService: ProductsService, private categoryService: CategoriesService,
              private bucketService: BucketService, private alertService: AlertService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(x => this.products = x);
    this.categoryService.getCategory().subscribe(x => this.categories = x);
  }

  onAddToBucket(productToBuy: Product) {
    this.logger.log('product was added to the bucket');

    this.bucketService.addItem(productToBuy, 1);
    this.alertService.alert('Product was added to the bucket!', AlertStatus.success);
  }

}
