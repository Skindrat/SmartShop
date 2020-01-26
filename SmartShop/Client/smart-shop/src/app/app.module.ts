import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { ProductsListComponent } from './components/store/products-list/products-list.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AboutComponent } from './components/store/about/about.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ProductDetailsComponent } from './components/store/product-details/product-details.component';
import { SearchProductsComponent } from './components/shared/search-products/search-products.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoginComponent } from './components/shared/login/login.component';
import {CounterOfDirective} from './directives/counter-of.directive';

export function getBaseUrl() {
  return environment.apiUrl;
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    AddProductComponent,
    AboutComponent,
    NavigationComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    SearchProductsComponent,
    AlertComponent,
    LoginComponent,
    CounterOfDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
