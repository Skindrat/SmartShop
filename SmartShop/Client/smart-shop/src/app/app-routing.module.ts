import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { ProductsListComponent } from './components/store/products-list/products-list.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { Role } from './models/role.enum';
import { AboutComponent } from './components/store/about/about.component';
import { LoginComponent } from './components/shared/login/login.component';
import { NgModule } from '@angular/core';

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
