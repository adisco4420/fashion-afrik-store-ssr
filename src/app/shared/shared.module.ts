import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe
    ]
})

export class SharedModule { }
