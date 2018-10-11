import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { userRoutes } from './user.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileEditComponent } from './my-profile-edit/my-profile-edit.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes),
        ToastrModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        AccountActivationComponent,
        ResetPasswordComponent,
        ChangePasswordComponent,
        ForgotPasswordComponent,
        MyProfileComponent,
        MyProfileEditComponent,
    ]
})

export class UserModule { }