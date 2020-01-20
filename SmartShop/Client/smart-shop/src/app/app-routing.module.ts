import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { Role } from './models/Role';


export const routerConfig: Routes = [
  {
    path: '',
    redirectTo: '/products-list',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add-product',
    component: AddProductComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
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
