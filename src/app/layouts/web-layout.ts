import { Component, effect, inject } from "@angular/core";
import { Footer } from "../features/web/shared/footer/footer";
import { Header } from "../features/web/shared/header/header";
import { RouterOutlet } from "@angular/router";
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { BreadcrumbService } from "../core/services/breadcrumb-service";

@Component({
  selector: 'web-layout',
  template: `
    <app-header />
    <!-- breadcrumb -->
    @if (breadcrumb.items.length > 0) {
      <div class="bg-surface-100">
        <div class="max-w-7xl mx-auto">
          <p-breadcrumb [model]="breadcrumb.items" styleClass="bg-surface-100" />
        </div>
      </div>
    }
    <!-- breadcrumb -->
    <router-outlet />
    <app-footer />
    `,
  imports: [Header, Footer, RouterOutlet, BreadcrumbModule]
})

export class WebLayout {
  breadcrumb = inject(BreadcrumbService);

  constructor() {
    // effect(() => {
    //   console.log('breadcrumb', this.breadcrumb.items)
    // })
  }
}
