import { DefaultLayout } from '../Layouts/DefaultLayout'

import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details'
import { Orders } from '../pages/Orders'
import { Home } from '../pages/Home'
import { Historic } from '../pages/Historic'

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
