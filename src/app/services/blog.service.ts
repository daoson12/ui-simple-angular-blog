
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from '../model/blog-post';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl = 'https://dummyapi.io/data/api';

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.apiUrl}/post`, {
      headers: new HttpHeaders({
        'app-id': '65985559ca01457cf5faf671', // Replace with your actual app id from dummyapi.io
      }),
    });
  }

  addBlogPost(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${this.apiUrl}/post`, blogPost, {
      headers: new HttpHeaders({
        'app-id': '65985559ca01457cf5faf671', // Replace with your actual app id from dummyapi.io
      }),
    });
  }

  updateBlogPost(id: string, changes: Partial<BlogPost>): Observable<BlogPost> {
    return this.http.put<BlogPost>(`${this.apiUrl}/post/${id}`, changes, {
      headers: new HttpHeaders({
        'app-id': '65985559ca01457cf5faf671', // Replace with your actual app id from dummyapi.io
      }),
    });
  }

  deleteBlogPost(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/post/${id}`, {
      headers: new HttpHeaders({
        'app-id': '65985559ca01457cf5faf671', // Replace with your actual app id from dummyapi.io
      }),
    });
  }
}
