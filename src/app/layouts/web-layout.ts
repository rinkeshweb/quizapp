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
    @if (breadcrumbs().length > 0) {
      <div class="bg-surface-100 px-6 sm:px-12">
        <div class="max-w-7xl mx-auto">
          <p-breadcrumb [home]="home()" [model]="breadcrumbs()" styleClass="bg-surface-100 px-0" />
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
  private breadcrumbService = inject(BreadcrumbService);

  breadcrumbs = this.breadcrumbService.items;
  home = this.breadcrumbService.home;
}
