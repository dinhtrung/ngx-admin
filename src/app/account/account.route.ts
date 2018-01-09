import { Routes } from '@angular/router';

import {
    activateRoute,
    loginRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    socialRegisterRoute,
    socialAuthRoute,
    settingsRoute
} from './';

const ACCOUNT_ROUTES = [
    activateRoute,
    loginRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    socialAuthRoute,
    socialRegisterRoute,
    settingsRoute
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
