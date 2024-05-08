import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Activity from '~pages/activity'
import LeftMenu from '~layouts/left-menu'
import Header from '~layouts/header/Header'
import Messages from '~pages/messages'

const App = () => {
  return (
    <BrowserRouter>
      <LeftMenu toggle={false} />
      <Header />
      <div className="page-content">
        <div className="page-content__container">
          <Routes>
            <Route path="/" element={<Activity />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
