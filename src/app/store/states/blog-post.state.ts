// blog-post.state.ts
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { BlogPost } from '../../model/blog-post';
import * as BlogPostActions from '../actions/blog-post.actions';

export interface BlogPostState extends EntityState<BlogPost> {}

export const adapter = createEntityAdapter<BlogPost>();

export const initialState: BlogPostState = adapter.getInitialState();

export const blogPostReducer = createReducer(
  initialState,
  on(BlogPostActions.addBlogPost, (state, { blogPost }) => adapter.addOne(blogPost, state)),
  on(BlogPostActions.updateBlogPost, (state, { update }) => adapter.updateOne(update, state)),
  on(BlogPostActions.deleteBlogPost, (state, { id }) => adapter.removeOne(id, state)),
  on(BlogPostActions.loadBlogPosts, (state, { blogPosts }) => adapter.setAll(blogPosts, state))
);
