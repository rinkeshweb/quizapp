import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Blog } from '@shared/models/blog.model';
import { find, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private BASE_URL = signal<string>('https://dummyjson.com/posts')
  private http = inject(HttpClient);

  getBlogs(): Observable<Blog[]> {
    return this.http
      .get<any>(this.BASE_URL())
      .pipe(map((res) => res.posts as Blog[]))
  }

  getSingleBlog(id: string | number): Observable<Blog | undefined> {
    return this.getBlogs().pipe(map(blog => blog.find(b => b.id == Number(id))));
  }

  getLatestBlogs(): Observable<Blog[]> {
    return this.getBlogs().pipe(map(blog => blog.slice(0, 4)))
  }

}
