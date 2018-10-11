import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { StoreRoutes } from './store.routing';
import { StoreProfileComponent } from './store-profile/store-profile.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(StoreRoutes),
        FormsModule,
    ],
    declarations: [ StoreProfileComponent ]
})

export class Module { }
