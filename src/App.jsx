import React from 'react'
import LocationTracker from './component/LocationTracker'
import ShowMap from "./component/ShowMap"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LocationTracker />} />
        <Route path="/map" element={<ShowMap></ShowMap>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
