import type { NextPage } from 'next'
import { useState } from 'react'

// bring in your modal and card
import PostModal from '../components/common/PostModal'
import Card from '../components/common/Card'

const Home: NextPage = () => {
  // 1. state to hold created posts
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([])

  // 2. helper to add a new post at the top
  const addPost = (title: string, content: string) => {
    setPosts(prev => [{ title, content }, ...prev])
  }

  return (
    <div className="p-6">
      {/* 3. your header */}
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>

      {/* 4. button that opens the modal */}
      <PostModal onCreate={addPost} />

      {/* 5. dynamically rendered cards from state */}
      <div className="mt-6 space-y-4">
        {posts.map((p, i) => (
          <Card key={i} title={p.title} content={p.content} />
        ))}
      </div>
    </div>
  )
}

export default Home
