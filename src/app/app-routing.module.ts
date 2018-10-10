import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    AuthGuardService as AuthGuard
  } from './auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from './auth/no-auth-guard.service';


import { DashboardComponent } from './components/Core/dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
