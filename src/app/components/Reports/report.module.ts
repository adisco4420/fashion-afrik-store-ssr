import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { ReportRoutes } from './report.routing';
import { PaymentReportsComponent } from './payment-reports/payment-reports.component';
import { SalesReportsComponent } from './sales-reports/sales-reports.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ReportRoutes),
        SharedModule
    ],
    declarations: [
        PaymentReportsComponent,
        SalesReportsComponent
    ]
})

export class ReportModule { }
