import { Routes } from "@angular/router";

export const WEB_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'about-us', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'contact-us', loadComponent: () => import('./contact-us/contact-us').then(m => m.ContactUs) },
  { path: 'blogs', loadComponent: () => import('./blogs/blogs').then(m => m.Blogs) },
  { path: 'blog/:id', loadComponent: () => import('./blog-details/blog-details').then(m => m.BlogDetails) },
]
