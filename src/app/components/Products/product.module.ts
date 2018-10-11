import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProductRoutes } from './product.routing';

import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { FilterPipe } from '../../shared/pipes/filter.pipe';






@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ProductRoutes),
        ToastrModule.forRoot(),
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EditProductComponent,
        NewProductComponent,
        ProductDetailComponent,
        ProductListingComponent,
        // FilterPipe
    ]
})

export class ProductModule { }
