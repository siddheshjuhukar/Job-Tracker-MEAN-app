import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ApplicationTrackerComponent } from '../../pages/application-tracker/application-tracker.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { LoginComponent } from '../../pages/login/login.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';
import { AboutMeComponent } from '../about-me/about-me.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'application_tracker',   component: ApplicationTrackerComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'change-password',   component: ChangePasswordComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'logout',          component: LoginComponent }
];
