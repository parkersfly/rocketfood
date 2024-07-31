import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { NewPlate } from '../pages/admin/NewPlate'
import { EditPlate } from '../pages/admin/EditPlate'
import { DefaultLayout } from '../Layouts/DefaultLayout'
import { OrdersHistory } from '../pages/OrdersHistory'

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<OrdersHistory />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/new" element={<NewPlate />} />
        <Route path="/edit/:id" element={<EditPlate />} />
      </Route>
    </Routes>
  )
}
