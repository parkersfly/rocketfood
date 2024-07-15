import { DefaultLayoutContainer, DefaultLayoutContent } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { useAuth } from '../../hooks/auth'

import { USER_ROLE } from '../../utils/role'

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  const { user } = useAuth()

  return (
    <DefaultLayoutContainer>
      {[USER_ROLE.ADMIN].includes(user.role) && <Header admin />}
      {[USER_ROLE.CUSTOMER].includes(user.role) && <Header />}
      <DefaultLayoutContent>
        <Outlet />
        <Footer />
      </DefaultLayoutContent>
    </DefaultLayoutContainer>
  )
}
