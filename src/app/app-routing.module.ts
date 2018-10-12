import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
    AuthGuardService as AuthGuard
  } from './auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from './auth/no-auth-guard.service';

import { DashboardComponent } from './components/Core/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '', loadChildren: './components/User/user.module#UserModule'},
    { path: '', loadChildren: './components/Store/store.module#StoreModule'},
    { path: '', loadChildren: './components/Customer/customer.module#CustomerModule'},
    { path: '', loadChildren: './components/Products/product.module#ProductModule'},
    { path: '', loadChildren: './components/Inventory/iinventory.module#InventoryModule'},
    { path: '', loadChildren: './components/Orders/order.module#OrderModule'},
    { path: '', loadChildren: './components/Reports/report.module#ReportModule'},
    { path: '**', redirectTo: '/' },
];
@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
