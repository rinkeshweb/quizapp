import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { BlogService } from '@core/services/blog-service';
import { Blog } from '@shared/models/blog.model';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator'

@Component({
  selector: 'app-blog-list',
  imports: [PaginatorModule, ButtonModule, RouterModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList {
  private blogService = inject(BlogService)

  blogItem = toSignal(
    this.blogService.getBlogs(),
    { initialValue: [] as Blog[] }
  );


}
