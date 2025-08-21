import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import FeedRoutes from './routes'

// Standalone dev mount
const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <BrowserRouter>
      <FeedRoutes />
    </BrowserRouter>
  )
}
