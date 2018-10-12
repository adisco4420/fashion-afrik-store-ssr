import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';

import { FilterPipe } from './pipes/filter.pipe';
import { FileValidator } from './validators/file-input.validator';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe,
        FileValidator
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent,
        FilterPipe,
        FileValidator
    ]
})

export class SharedModule { }
