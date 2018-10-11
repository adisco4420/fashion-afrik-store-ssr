import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthFooterComponent } from './auth-footer/auth-footer.component';



@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AuthFooterComponent
    ],
    exports: [ HeaderComponent, SidebarComponent, AuthFooterComponent]
})

export class SharedModule { }
