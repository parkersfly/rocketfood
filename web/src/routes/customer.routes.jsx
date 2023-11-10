import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/user/Home'
import { Menu } from '../pages/user/Menu'
import { Details } from '../pages/user/Details'

export function CustomerRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/details" element={<Details />}/>
    </Routes>
  )
}