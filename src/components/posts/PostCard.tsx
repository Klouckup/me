import { PostData } from '@/types/Post';
import React from 'react';

export default function PostCard({ post }: { post: PostData }) {
  return (
    // A card to wrap all elements
    <div>
      // post thumbnail image
      <img src="{post.data.thumbnail}" alt="postCardImage" />
      <div>
        // post content
        <h2>{post.data.title}</h2>
        // post description
        <p>{post.data.description}</p>
      </div>
      <div>
        // post date
        <h2> 📅{post.data.date}</h2>
        // post readTime
        <p>⏰ min read</p>
      </div>
    </div>
  );
}
