import { DestroyRef, inject, Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  items: MenuItem[] = [];

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = [];
        this.build(this.route.root);

        const allHome = this.items.every(item=> item.label === 'Home');
        if (allHome) {
          this.items = [];
        }
      })

    this.destroyRef.onDestroy(() => {
      this.items = []
    })
  }

  private build(route: ActivatedRoute, url: string = ''): void {
    const children = route.children;

    for (const child of children) {
      if (child.snapshot.url.length) {
        url += '/' + child.snapshot.url.map(s => s.path).join('/')
      }
      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        this.items.push({
          label,
          routerLink: url
        })
      }
      this.build(child, url);
    }


  }

}
