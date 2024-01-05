// blog-post.actions.ts
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { BlogPost } from '../../model/blog-post';



export const addBlogPost = createAction('[Blog Post] Add', props<{ blogPost: BlogPost }>());
export const updateBlogPost = createAction('[Blog Post] Update', props<{ update: Update<BlogPost> & { id: string } }>());
export const deleteBlogPost = createAction('[Blog Post] Delete', props<{ id: string }>());
export const loadBlogPosts = createAction('[Blog Post] Load', props<{ blogPosts: BlogPost[] }>());

