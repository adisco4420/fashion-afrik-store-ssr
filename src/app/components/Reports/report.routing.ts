import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';

  export const ReportRoutes = [
    { path: 'payment-reports', component: PaymentReportsComponent, canActivate: [AuthGuard] },
    { path: 'sales-reports', component: SalesReportsComponent, canActivate: [AuthGuard] },
  ]