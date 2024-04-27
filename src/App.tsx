import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Activity from '~pages/activity'
import LeftMenu from '~layouts/left-menu'

const App = () => {
  return (
    <div className="wrapper">
      <LeftMenu toggle={false} />
      <div className={`page page__left-toggle-${'closed'}`}>
        <Router>
          <Routes>
            <Route path="/" element={<Activity />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
