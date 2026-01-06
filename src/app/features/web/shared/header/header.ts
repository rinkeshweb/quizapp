import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-header',
  imports: [RouterLink, MenubarModule, BadgeModule, AvatarModule, ButtonModule, Dialog],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  isDark = signal<boolean>(false);
  isModalOpen = signal<boolean>(false)
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        // icon: 'pi pi-home',
        routerLink: '/'
      },
      {
        label: 'About Us',
        routerLink: '/about-us'
      },
      {
        label: 'Blog',
        items: [
          {
            label: 'Blogs',
            routerLink: '/blogs'
          },
          {
            separator: true,
          },
          {
            label: 'blog-details',
            routerLink: '/blog-details/:blogid'
          },
        ],
      },
      {
        label: 'Contact Us',
        routerLink: '/contact-us'
      },
    ];
  }

  toggleTheme() {
    const isDarkNow = document.documentElement.classList.toggle('p-dark');
    this.isDark.set(isDarkNow);
    console.log('click', isDarkNow)
  }

  showDialog() {
    this.isModalOpen.set(true);
  }

  closeDialog() {
    this.isModalOpen.set(false);
  }


}
