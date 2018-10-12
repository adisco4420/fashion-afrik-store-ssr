import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';
import { OrderListingComponent } from './order-listing/order-listing.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

export const OrderRoutes = [
    { path: 'orders', component: OrderListingComponent, canActivate: [AuthGuard] },
    { path: 'order/detail', component: OrderDetailComponent, canActivate: [AuthGuard] },
]