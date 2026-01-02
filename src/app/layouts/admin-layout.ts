import { RouterOutlet } from '@angular/router';
import { Component } from "@angular/core";
import { Header } from "../features/admin/shared/header/header";
import { Footer } from "../features/admin/shared/footer/footer";

@Component({
  selector: 'admin-layout',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <admin-header />
    <router-outlet />
    <admin-footer />
  `,
})

export class AdminLayout { }
