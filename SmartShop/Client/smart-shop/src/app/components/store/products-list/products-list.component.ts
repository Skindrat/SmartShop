import {AlertService} from '../../../services/alert.service';
import {ProductsService} from '../../../services/products.service';
import {Component, OnInit} from '@angular/core';
import {Product} from '../../../models/product';
import {Logger} from '../../../services/logger.service';
import {BucketService} from '../../../services/bucket.service';
import {AlertStatus} from '../../../models/alerts/alert-status.enum';
import {CategoriesService} from 'src/app/services/categories.service';
import {Category} from 'src/app/models/category';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsPerPage = 3;
  selectedPage = 1;
  selectedCategoryId = 0;

  products: Product[] = [];
  categories: Category[] = [];

  constructor(private logger: Logger, private productsService: ProductsService, private categoryService: CategoriesService,
              private bucketService: BucketService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.categoryService.getCategory()
      .pipe(first())
      .subscribe(categories => {
        if (categories || categories.length > 0) {
          this.categories = categories;
          this.onChangeCategory(this.categories[0].id);
          this.logger.log('categories.length <= 0 or wrong');
        } else {
          this.logger.log('categories.length <= 0 or wrong');
        }
      }, error => this.logger.log(error));
  }

  get pageNumbers(): number {
    const productsLength = this.productsService.getProductsCount();
    return Math.ceil(productsLength / this.productsPerPage);
  }

  onAddToBucket(productToBuy: Product) {
    this.bucketService.addItem(productToBuy, 1);
    this.alertService.alert('Product was added to the bucket!', AlertStatus.success);
  }

  onChangeCategory(id: number) {
    this.selectedCategoryId = id;
    this.updateProducts();
  }

  onChangeProductsPerPage($event: any) {
    this.productsPerPage = Number($event.target.value);
    this.onChangePage(1);
  }

  onChangePage(pageNumber: number) {
    this.selectedPage = pageNumber;
    this.updateProducts();
  }

  private updateProducts() {
    this.productsService.getProductByCategory(this.selectedCategoryId, this.selectedPage, this.productsPerPage)
      .pipe(first())
      .subscribe(products => {
        this.products = products;
      }, error => this.logger.log(error));
  }
}
