import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

import { FilterPipe } from './pipes/filter.pipe';
import { Validators } from '@angular/forms';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe,
        Validators
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe,
        Validators
    ]
})

export class SharedModule { }
