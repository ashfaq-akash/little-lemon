import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CustomerSay from './components/CustomerSay'
import Specials from './components/Specials'
import Chicago from './components/Chicago'
import Home from './components/Home'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<Chicago />} />
        <Route path='/menu' element={<Specials />} />
        <Route path='/order-online' element={<CustomerSay />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
