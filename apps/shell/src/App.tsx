import * as React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

const FeedRoutes = React.lazy(() => import('sm_feed/Routes'))
// const ProfileRoutes = React.lazy(() => import('sm_profile/Routes'))

export default function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: 'flex',
          gap: 12,
          padding: 12,
          borderBottom: '1px solid #eee',
        }}
      >
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <React.Suspense fallback={<div style={{ padding: 16 }}>Loading…</div>}>
        <Routes>
          <Route path="/" element={<Navigate to="/feed" replace />} />
          <Route path="/feed/*" element={<FeedRoutes />} />
          {/* <Route path="/profile/*" element={<ProfileRoutes />} /> */}
          <Route
            path="*"
            element={<div style={{ padding: 16 }}>404 Not Found</div>}
          />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  )
}
