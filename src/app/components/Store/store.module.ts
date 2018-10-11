import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { StoreRoutes } from './store.routing';
import { StoreProfileComponent } from './store-profile/store-profile.component';





@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StoreRoutes),
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [ StoreProfileComponent ]
})

export class StoreModule { }
