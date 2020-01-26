import { AlertService } from '../../../services/alert.service';
import { ProductsService } from '../../../services/products.service';
import {Component, OnInit} from '@angular/core';
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

  productsPerPage = 3;
  pageNumbers = [];
  selectedPage = 1;
  selectedCategoryId = 0;

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private logger: Logger, private productsService: ProductsService, private categoryService: CategoriesService,
              private bucketService: BucketService, private alertService: AlertService) { }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(categories => {
      this.categories = categories;
      if (this.categories.length > 0) {
        this.changeCategory(categories[0].id);
      } else {
        this.logger.log('categories.length <= 0');
      }
    });
  }

  onAddToBucket(productToBuy: Product) {
    this.logger.log('product was added to the bucket');

    this.bucketService.addItem(productToBuy, 1);
    this.alertService.alert('Product was added to the bucket!', AlertStatus.success);
  }

  changeCategory(id: number) {
    this.logger.log('category was changed to Id:' + id);

    this.selectedCategoryId = id;
    this.updateProducts();
  }

  private updateProducts() {
    this.logger.log('update products for categoryId:' + this.selectedCategoryId);

    this.productsService.getProductByCategory(this.selectedCategoryId, this.selectedPage, this.productsPerPage)
      .subscribe(products => {
        this.products = products;
        this.pageNumbers = Array(Math.ceil(products.length / this.productsPerPage))
          .fill(0)
          .map((x, i) => i + 1);
      });
  }

  changePageSize(newSize: any) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  changePage(page: number) {
    this.selectedPage = page;
    this.updateProducts();
  }
}
