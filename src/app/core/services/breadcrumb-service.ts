import { Injectable, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private title = inject(Title)

  // PrimeNG Home item (separate)
  readonly home = signal<MenuItem>({
    icon: 'pi pi-home',
    routerLink: '/'
  });

  readonly items = signal<MenuItem[]>([]);
  private dynamicTitle = signal<string | null>(null)

  private readonly APP_NAME = 'QuizApp';


  constructor() {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => {
        this.dynamicTitle.set(null); // reset on navigation
        this.buildBreadcrumbs();
      });
  }

  /** Called from ANY detail page (Blog, Product, etc.) */
  setDynamicTitle(title: string) {
    this.dynamicTitle.set(title);
    this.buildBreadcrumbs(); // 🔥 REQUIRED
  }

  // ================= CORE LOGIC =================

  private buildBreadcrumbs() {
    const crumbs: MenuItem[] = [];
    this.build(this.route.root, '', crumbs);

    // Remove Home from model (PrimeNG uses separate home)
    let filtered = crumbs.filter(c => c.label !== 'Home');

    // 🔥 FIX: Inject logical parent for detail pages
    // If we have a dynamic title but no Blogs yet → add Blogs
    const hasDynamicTitle = this.dynamicTitle() !== null;
    const hasBlogs = filtered.some(c => c.label === 'Blogs');

    if (hasDynamicTitle && !hasBlogs) {
      filtered = [
        { label: 'Blogs', routerLink: '/blogs' },
        ...filtered
      ];
    }

    const finalCrumbs = filtered.map((c, i, arr) => ({
      ...c,
      disabled: i === arr.length - 1
    }));

    this.items.set(finalCrumbs);

    // 🔥 AUTO PAGE TITLE SYNC
    this.syncPageTitle(finalCrumbs);
  }


  private syncPageTitle(crumbs: MenuItem[]) {
    if (!crumbs.length) {
      this.title.setTitle(this.APP_NAME);
      return;
    }
    const labels = crumbs.map(c => c.label);
    const pageTitle = `${labels.reverse().join(' | ')} | ${this.APP_NAME}`;
    this.title.setTitle(pageTitle);
  }

  private build(
    route: ActivatedRoute,
    url: string,
    crumbs: MenuItem[]
  ) {
    for (const child of route.children) {
      let nextUrl = url;
      if (child.snapshot.url.length) {
        nextUrl += '/' + child.snapshot.url.map(s => s.path).join('/');
      }
      const data = child.snapshot.data;
      if (data && data['breadcrumb']) {
        const label =
          data['dynamic'] && this.dynamicTitle()
            ? this.dynamicTitle()!
            : data['breadcrumb'];
        crumbs.push({
          label,
          routerLink: data['breadcrumbLink'] ?? (nextUrl || '/'),
        });
      }
      this.build(child, nextUrl, crumbs);
    }
  }
}
