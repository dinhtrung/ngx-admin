import { Route } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { LoginComponent } from './login.component';

export const loginRoute: Route = {
    path: 'sign-on',
    component: LoginComponent,
    data: {
        authorities: [],
        pageTitle: 'global.menu.account.login'
    },
    canActivate: [UserRouteAccessService]
};
