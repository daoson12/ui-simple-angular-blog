// blog-post.model.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  created: string; // Assuming created is a string in ISO format
  updated: string; // Assuming updated is a string in ISO format
}