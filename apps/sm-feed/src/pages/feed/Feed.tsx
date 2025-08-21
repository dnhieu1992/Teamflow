import * as React from 'react'
import { Link } from 'react-router-dom'

export default function Feed() {
  return (
    <div style={{ padding: 16 }}>
      <h2>News Feed</h2>
      <ul>
        <li>
          <Link to="post/1">Post #1</Link>
        </li>
        <li>
          <Link to="post/2">Post #2</Link>
        </li>
      </ul>
    </div>
  )
}
