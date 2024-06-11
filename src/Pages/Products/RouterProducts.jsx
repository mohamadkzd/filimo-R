import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'

const RouterProducts = () => {
  return (
   <Routes>
     <Route path='/' element={<Products/>}/>
   </Routes>
  )
}

export default RouterProducts