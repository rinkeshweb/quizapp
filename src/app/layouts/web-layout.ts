import { Component } from "@angular/core";
import { Footer } from "../features/web/shared/footer/footer";
import { Header } from "../features/web/shared/header/header";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'web-layout',
  template: `
    <app-header />
    <router-outlet />
    <app-footer />
    `,
  imports: [Header, Footer, RouterOutlet]
})

export class WebLayout { }
