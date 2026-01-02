import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./dahsboard/dahsboard').then(m => m.Dahsboard) },
]
