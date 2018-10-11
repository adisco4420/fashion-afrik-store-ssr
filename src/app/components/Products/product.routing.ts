import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';

import {
    NoAuthGuardService as NoAuthGuard
  } from '../../auth/no-auth-guard.service';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


export const ProductRoutes = [
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthGuard] },
    { path: 'products', component: ProductListingComponent, canActivate: [AuthGuard] },
    { path: 'new-product', component: NewProductComponent, canActivate: [AuthGuard] },
    { path: 'edit-product', component: EditProductComponent, canActivate: [AuthGuard]}
]
