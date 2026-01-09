import { Routes } from "@angular/router";

export const WEB_ROUTES: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home), data: { breadcrumb: 'Home' } },
  { path: 'about-us', loadComponent: () => import('./about/about').then(m => m.About), data: { breadcrumb: 'About Us' } },
  { path: 'contact-us', loadComponent: () => import('./contact-us/contact-us').then(m => m.ContactUs), data: { breadcrumb: 'Contact Us' } },
  { path: 'blogs', loadComponent: () => import('./blogs/blog-list/blog-list').then(m => m.BlogList), data: { breadcrumb: 'Blogs', breadcrumbLink: '/blogs' } },
  { path: 'blog/:blogId', loadComponent: () => import('./blogs/blog-details/blog-details').then(m => m.BlogDetails), data: { breadcrumb: 'Blog', dynamic: true } },
]
