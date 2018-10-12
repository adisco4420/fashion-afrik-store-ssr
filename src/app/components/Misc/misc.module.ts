import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MiscRoutes } from './misc.routing';


import { ContactUsComponent } from './contact-us/contact-us.component';
import { SettingsComponent } from './settings/settings.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(MiscRoutes),
        SharedModule
    ],
    declarations: [
        ContactUsComponent,
        SettingsComponent,
        TermsComponent

    ]
})

export class MiscModule { }