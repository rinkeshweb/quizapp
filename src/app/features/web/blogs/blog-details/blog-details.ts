import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { BlogService } from '@core/services/blog-service';
import { BreadcrumbService } from '@core/services/breadcrumb-service';
import { map, switchMap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-blog-details',
  templateUrl: './blog-details.html',
})
export class BlogDetails {
  private route = inject(ActivatedRoute);
  private blogService = inject(BlogService);
  private breadcrumbService = inject(BreadcrumbService);

  blog = toSignal(
    this.route.paramMap.pipe(
      map(p => p.get('blogId')),
      switchMap(id => this.blogService.getSingleBlog(id!))
    ),
    { initialValue: null }
  );


  constructor() {
    effect(() => {
      const blog = this.blog();
      if (blog) {
        this.breadcrumbService.setDynamicTitle(blog.title);
      }
    });
  }


}
