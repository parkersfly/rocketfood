import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/admin/Home'
import { Menu } from '../pages/admin/Menu'
import { Details } from '../pages/admin/Details'
import { NewPlate } from '../pages/admin/NewPlate'
import { EditPlate } from '../pages/admin/EditPlate'

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/details" element={<Details />}/>
      <Route path="/new" element={<NewPlate />}/>
      <Route path="/edit" element={<EditPlate />}/>
    </Routes>
  )
}