import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { BlogService } from '@core/services/blog-service';
import { Blog } from '@shared/models/blog.model';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-latest-blog',
  imports: [AnimateOnScrollModule, RouterModule],
  templateUrl: './latest-blog.html',
  styleUrl: './latest-blog.css',
})
export class LatestBlog {
  private blogService = inject(BlogService)

  latestBlogs = toSignal(
    this.blogService.getLatestBlogs(),
    { initialValue: [] as Blog[] }
  );

}
