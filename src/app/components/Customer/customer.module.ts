import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { CustomerRoutes } from './customer.routing';

import { CustomersListingComponent } from './customers-listing/customers-listing.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(CustomerRoutes),
        SharedModule
    ],
    declarations: [
        CustomerDetailComponent,
        CustomersListingComponent
    ]
})

export class CustomerModule { }