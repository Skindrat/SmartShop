import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routerConfig: Routes = [
  {
      path: 'products-list',
      component: ProductsListComponent
  },
  {
      path: 'add-product',
      component: AddProductComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: '',
      redirectTo: '/products-list',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/products-list',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
