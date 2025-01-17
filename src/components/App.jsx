import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './MainPage'
import Assortment from './Assortment'

function App() {

  return (
    <Routes>
      <Route path='/'
        element={
          <MainPage/>}
      />
      <Route path='/assortment'
        element={
          <Assortment/>}
      />
    </Routes>
  )
}

export default App
