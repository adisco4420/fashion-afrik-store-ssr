import {
    AuthGuardService as AuthGuard
  } from '../../auth/auth-guard.service';

import { SettingsComponent } from './settings/settings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsComponent } from './terms/terms.component';

export const MiscRoutes = [
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    { path: 'contact-us', component: ContactUsComponent},
    { path: 'terms', component: TermsComponent}
]