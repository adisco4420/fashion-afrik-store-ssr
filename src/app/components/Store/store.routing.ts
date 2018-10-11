import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';

  import {
    NoAuthGuardService as NoAuthGuard
  } from '../../auth/no-auth-guard.service';
import { StoreProfileComponent } from './store-profile/store-profile.component';

export const StoreRoutes = [
    { path: 'store-profile', component: StoreProfileComponent, canActivate: [AuthGuard] }
]