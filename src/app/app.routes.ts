import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { logedGuard } from './guards/loged.guard';
import { authGuard } from './guards/auth.guard';
import { isValidGuard } from './guards/is-valid.guard';
import { authResolver } from './resolvers/auth.resolver';
import { SistfdLayoutComponent } from './layouts/sistfd-layout/sistfd-layout.component';
import { SesadmLayoutComponent } from './layouts/sesadm-layout/sesadm-layout.component';
import { isVerifiedGuard } from './guards/is-verified.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivateChild: [logedGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/auth/auth-login/auth-login.page').then( m => m.AuthLoginPage)
      },
      {
        path: 'recover',
        loadComponent: () => import('./pages/auth/auth-recover/auth-recover.page').then( m => m.AuthRecoverPage)
      },
      {
        path: 'verification/:id',
        loadComponent: () => import('./pages/auth/auth-verification/auth-verification.page').then( m => m.AuthVerificationPage),
        canActivate: [isVerifiedGuard]
      },
      {
        path: 'reset/:id',
        loadComponent: () => import('./pages/auth/auth-reset/auth-reset.page').then( m => m.AuthResetPage),
        canActivate: [isVerifiedGuard]
      },
    ]
  },
  {
    path: 'main',
    component: MainLayoutComponent,
    resolve: {user: authResolver},
    canActivateChild: [authGuard, isValidGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/main/main-home/main-home.page').then( m => m.MainHomePage),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/main/main-dashboard/main-dashboard.page').then( m => m.MainDashboardPage)
      },
      {
        path: 'module/sesadm',
        component: SesadmLayoutComponent,
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/sesadm/sesadm-index/sesadm-index.page').then( m => m.SesadmIndexPage)
          },
          {
            path: 'users',
            loadComponent: () => import('./pages/sesadm/sesadm-users/sesadm-users.page').then( m => m.SesadmUsersPage)
          },
          {
            path: 'roles',
            loadComponent: () => import('./pages/sesadm/sesadm-roles/sesadm-roles.page').then( m => m.SesadmRolesPage)
          },
          {
            path: 'competences',
            loadComponent: () => import('./pages/sesadm/sesadm-competences/sesadm-competences.page').then( m => m.SesadmCompetencesPage)
          },
          {
            path: 'procedures/:competence_id',
            loadComponent: () => import('./pages/sesadm/sesadm-procedures/sesadm-procedures.page').then( m => m.SesadmProceduresPage)
          },
          {
            path: 'counties',
            loadComponent: () => import('./pages/sesadm/sesadm-counties/sesadm-counties.page').then( m => m.SesadmCountiesPage)
          },
        ]
      },
      {
        path: 'module/sistfd',
        component: SistfdLayoutComponent,
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/sistfd/sistfd-index/sistfd-index.page').then( m => m.SistfdIndexPage)
          },
          {
            path: 'users',
            loadComponent: () => import('./pages/sistfd/sistfd-users/sistfd-users.page').then( m => m.SistfdUsersPage)
          },
          {
            path: 'roles',
            loadComponent: () => import('./pages/sistfd/sistfd-roles/sistfd-roles.page').then( m => m.SistfdRolesPage)
          },
        ]
      },
      {
        path: 'messages',
        loadComponent: () => import('./pages/main/main-messages/main-messages.page').then( m => m.MainMessagesPage)
      },
    ]
  },
];
