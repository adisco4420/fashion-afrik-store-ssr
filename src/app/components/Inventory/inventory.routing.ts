import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';

    // component
import { InventoryListingComponent } from './inventory-listing/inventory-listing.component';
import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';

export const InventoryRoutes = [
    { path: 'inventory', component: InventoryListingComponent, canActivate: [AuthGuard] },
    { path: 'inventory/detail', component: InventoryDetailComponent, canActivate: [AuthGuard] },
    { path: 'inventory-reports', component: InventoryReportsComponent, canActivate: [AuthGuard] },
]