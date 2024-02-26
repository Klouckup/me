import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextPostPreview, PostData } from '@/types/Post';
import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const sortPostsByDate = (posts: PostData[]) => {
  return posts.sort((a: PostData, b: PostData) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return bDate.getDate() - aDate.getDate();
  });
};

export const getPosts = (): PostData[] => {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    } as PostData;
  });

  posts = sortPostsByDate(posts);

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  return { source: content, data, postFilePath };
};

export const getNextPostBySlug = (slug: string): NextPostPreview | null => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = currentPost ? posts.indexOf(currentPost) : -1;

  if (currentPostIndex < 0) return null;

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return null;

  const nextPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug: string) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = currentPost ? posts.indexOf(currentPost) : -1;

  if (currentPostIndex < 0) return null;

  const post = posts[currentPostIndex + 1];
  // no prev post found
  if (!post) return null;

  const previousPostSlug = post?.filePath.replace(/\.mdx?$/, '');

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};
