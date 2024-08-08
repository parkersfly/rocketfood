import { DefaultLayout } from '../Layouts/DefaultLayout'

import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details'
import { Orders } from '../pages/Orders'
import { Home } from '../pages/Home'
import { OrdersHistory } from '../pages/OrdersHistory'
import { Favorites } from '../pages/Favorites'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<OrdersHistory />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
