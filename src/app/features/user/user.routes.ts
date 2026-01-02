import { Routes } from "@angular/router";

export const USER_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./dahsboard/dahsboard').then(m => m.Dahsboard) },
]
