// blog-post.effects.ts
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import * as BlogPostActions from '../actions/blog-post.actions';
import { BlogPostService } from '../../services/blog.service';

@Injectable()
export class BlogPostEffects {
  addBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.addBlogPost),
      mergeMap(action => this.blogPostService.addBlogPost(action.blogPost)),
      map(blogPost => BlogPostActions.addBlogPost({ blogPost }))
    )
  );

  updateBlogPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.updateBlogPost),
      mergeMap((action) =>
        this.blogPostService.updateBlogPost(action.update.id, action.update.changes).pipe(
          map(() => BlogPostActions.updateBlogPost({ update: action.update }))
        )
      )
    )
  );

  deleteBlogPost$ = createEffect(() =>
  this.actions$.pipe(
    ofType(BlogPostActions.deleteBlogPost),
    mergeMap((action) =>
      this.blogPostService.deleteBlogPost(action.id).pipe(
        map(() => BlogPostActions.deleteBlogPost({ id: action.id }))
      )
    )
  )
);


  loadBlogPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogPostActions.loadBlogPosts),
      mergeMap(() => this.blogPostService.getBlogPosts()),
      map(blogPosts => BlogPostActions.loadBlogPosts({ blogPosts }))
    )
  );

constructor(private actions$: Actions, private blogPostService: BlogPostService) {}
}
