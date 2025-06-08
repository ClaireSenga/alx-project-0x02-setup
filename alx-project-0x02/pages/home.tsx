import { useState } from 'react';
import PostModal from '../components/common/PostModal';
import Card from '../components/common/Card';

const Home: NextPage = () => {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const addPost = (title: string, content: string) => {
    setPosts(prev => [{ title, content }, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <PostModal onCreate={addPost} />
      <div className="mt-6 space-y-4">
        {posts.map((p, i) => (
          <Card key={i} title={p.title} content={p.content} />
        ))}
      </div>
    </div>
  );
};
