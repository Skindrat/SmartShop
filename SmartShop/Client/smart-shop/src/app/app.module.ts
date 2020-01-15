import { environment } from './../environments/environment.prod';
import { UserService } from './shared/user.service';
import { Logger } from './shared/logger.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchProductsComponent } from './search-products/search-products.component';

const API_BASE_URL = environment.apiUrl;

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    AboutComponent,
    NavigationComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    SearchProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Logger, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
