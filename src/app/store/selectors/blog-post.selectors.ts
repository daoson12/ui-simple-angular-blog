// blog-post.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, BlogPostState } from '../states/blog-post.state';

const selectBlogPostState = createFeatureSelector<BlogPostState>('blogPosts');
const { selectAll } = adapter.getSelectors();

export const selectAllBlogPosts = createSelector(selectBlogPostState, selectAll);
