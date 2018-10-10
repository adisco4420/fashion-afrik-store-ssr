import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from '../../auth/no-auth-guard.service';
// component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountActivationComponent } from './account-activation/account-activation.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileEditComponent } from './my-profile-edit/my-profile-edit.component';

export const userRoutes = [
    { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
    { path: 'register', component: RegisterComponent, canActivate: [NoAuthGuard] },
    { path: 'activate/:uid/:token', component: AccountActivationComponent, canActivate: [NoAuthGuard] },
    { path: 'reset-password', component: ResetPasswordComponent, canActivate: [AuthGuard] },
    { path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [NoAuthGuard] },

    // profile
    { path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard] },
    { path: 'my-profile-edit', component: MyProfileEditComponent, canActivate: [AuthGuard] },
]