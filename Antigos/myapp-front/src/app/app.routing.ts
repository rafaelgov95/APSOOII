import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './componente/home/index';
import { LoginComponent } from './componente/login/login.component';
import { RegisterComponent } from './componente/register/index';
import { ConteudoComponent } from './componente/conteudo/conteudo.component';
import { AuthGuard } from './componente/_guards/index';

const appRoutes: Routes = [

    // { path: '', component: ConteudoComponent },
    // { path: 'logado', component: HomeComponent, canActivate: [AuthGuard] },
    // { path: 'register', component: RegisterComponent },
    // { path: 'login', component: LoginComponent },

    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }

    // otherwise redirect to home

];

export const routing = RouterModule.forRoot(appRoutes);