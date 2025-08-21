import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/feed/Feed'
import PostDetail from './pages/post-detail/PostDetail'

export default function FeedRoutes() {
  return (
    <Routes>
      <Route index element={<Feed />} />
      <Route path="post/:id" element={<PostDetail />} />
      <Route path="*" element={<div style={{ padding: 16 }}>Feed 404</div>} />
    </Routes>
  )
}
