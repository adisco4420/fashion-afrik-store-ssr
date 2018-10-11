// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import {
    AuthGuardService as AuthGuard
  } from './auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from './auth/no-auth-guard.service';

import { Globals } from './shared/api';

import { FileValidator } from './validators/file-input.validator';

// component
import { AppComponent } from './app.component';

import { FooterComponent } from './components/Core/footer/footer.component';
import { DashboardComponent } from './components/Core/dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        DashboardComponent,
        FileValidator
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        HttpModule,
        SharedModule,
        BrowserAnimationsModule
    ],
    providers: [
        AuthGuard,
        NoAuthGuard,
        Globals
    ]
})
export class AppModule { }
