import { InventoryDetailComponent } from './inventory-detail/inventory-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InventoryRoutes } from './inventory.routing';
import { InventoryListingComponent } from './inventory-listing/inventory-listing.component';
import { InventoryReportsComponent } from './inventory-reports/inventory-reports.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(InventoryRoutes),
        ToastrModule.forRoot(),
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        InventoryDetailComponent,
        InventoryListingComponent,
        InventoryReportsComponent
    ]
})

export class InventoryModule { }