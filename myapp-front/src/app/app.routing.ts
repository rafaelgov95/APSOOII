import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componente/home/index';
import { LoginComponent } from './componente/login/index';
import { RegisterComponent } from './componente/register/index';
import { AuthGuard } from './componente/_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
   

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);