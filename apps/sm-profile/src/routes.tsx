import * as React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

export default function ProfileRoutes() {
  return (
    <Routes>
      <Route index element={<ProfilePage />} />
      <Route
        path="*"
        element={<div style={{ padding: 16 }}>Profile 404</div>}
      />
    </Routes>
  )
}
