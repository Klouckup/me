import PostCard from '../../components/posts/PostCard';
import { getPosts } from '@/utils/mdx-utils';
import { PostData } from '@/types/Post';

export async function getData(): Promise<PostData[]> {
  let posts = getPosts();
  return posts;
}

export default async function Blog(props: any) {
  const posts = await getData();

  return (
    <div>
      <title>Cooking Blog</title>

      <h1>Cooking Blog</h1>
      {posts.length ?? 0 ? (
        <div>
          {posts.map((post: PostData, index: any) => (
            <PostCard post={post} />
          ))}
        </div>
      ) : (
        <h2>No posts yet</h2>
      )}
    </div>
  );
}
