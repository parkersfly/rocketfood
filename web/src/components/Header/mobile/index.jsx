import { MobileContainer, Order } from './styles'

import { List, Receipt } from '@phosphor-icons/react'

import { Logo } from '../../Logo'

import { USER_ROLE } from '../../../utils/role'
import { useAuth } from '../../../hooks/auth'
import { Menu } from '../../Menu'

import { useState } from 'react'

export function Mobile() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { user } = useAuth()

  return (
    <MobileContainer className="flex items-center">
      <button onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <List size={32} />
      </button>

      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <div className="flex justify-center logoAdmin">
          <Logo admin />
        </div>
      )}

      {[USER_ROLE.CUSTOMER].includes(user.role) && <Logo />}

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <Order>
          <button className="request">
            <Receipt size={32} />
            <div>
              <p>0</p>
            </div>
          </button>
        </Order>
      )}
    </MobileContainer>
  )
}
