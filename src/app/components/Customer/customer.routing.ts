import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';


import { CustomersListingComponent } from './customers-listing/customers-listing.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

export const CustomerRoutes = [
    { path: 'customer-list', component: CustomersListingComponent, canActivate: [AuthGuard]},
    { path: 'customer-detail', component: CustomerDetailComponent, canActivate: [AuthGuard]}
]
