import { Routes } from '@angular/router';
import { PageNotFound } from './features/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '', loadComponent: () => import('./layouts/web-layout').then((m) => m.WebLayout),
    data: { breadcrumb: 'Home' },
    loadChildren: () => import('./features/web/web.routes').then((m) => m.WEB_ROUTES)
  },
  {
    path: 'user', loadComponent: () => import('./layouts/user-layout').then((m) => m.UserLayout),
    loadChildren: () => import('./features/user/user.routes').then((m) => m.USER_ROUTES)
  },
  {
    path: 'admin', loadComponent: () => import('./layouts/admin-layout').then((m) => m.AdminLayout),
    loadChildren: () => import('./features/admin/admin.routes').then((m) => m.ADMIN_ROUTES)
  },
  { path: '**', component: PageNotFound }
];
