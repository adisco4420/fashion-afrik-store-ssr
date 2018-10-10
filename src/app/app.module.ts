// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import {
    AuthGuardService as AuthGuard
  } from './auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from './auth/no-auth-guard.service';

import { Globals } from './shared/api';

// component
import { AppComponent } from './app.component';

import { FooterComponent } from './components/Core/footer/footer.component';
import { HeaderComponent } from './components/Core/header/header.component';
import { DashboardComponent } from './components/Core/dashboard/dashboard.component';
import { SidebarComponent } from './components/Core/sidebar/sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        DashboardComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule
    ],
    providers: [
        AuthGuard,
        NoAuthGuard,
        Globals
    ]
})
export class AppModule { }
