import * as React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function PostDetail() {
  const { id } = useParams()
  return (
    <div style={{ padding: 16 }}>
      <h3>Post Detail — {id}</h3>
      <Link to="/">Back to feed</Link>
    </div>
  )
}
