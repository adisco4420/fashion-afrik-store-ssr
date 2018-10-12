import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { OrderRoutes } from './order.routing';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListingComponent } from './order-listing/order-listing.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(OrderRoutes),
        SharedModule
    ],
    declarations: [
        OrderDetailComponent,
        OrderListingComponent
    ]
})

export class OrderModule { }