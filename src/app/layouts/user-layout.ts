import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Header } from "../features/user/shared/header/header";
import { Footer } from "../features/user/shared/footer/footer";

@Component({
  selector: 'user-layout',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <user-header />
    <router-outlet />
    <user-footer />
  `,
})

export class UserLayout { }
