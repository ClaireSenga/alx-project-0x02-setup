import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const Posts: NextPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(r => r.json())
      .then(setPosts);
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Posts</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.slice(0, 10).map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
