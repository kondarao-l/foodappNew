
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Dashboard from './DashBoard'
import Brouncheri from './Restaurants/Brouncheri'
import Cart from './Cart'

function MainFile() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} ></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/brouncheri' element = {<Brouncheri/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
        </div>
  )
}

export default MainFile

