import { DesktopMenuContainer, Search } from './styles'

import { Logo } from '../../Logo'

import { SignOut, MagnifyingGlass, Receipt } from '@phosphor-icons/react'

import { USER_ROLE } from '../../../utils/role'
import { useAuth } from '../../../hooks/auth'
import { api } from '../../../services/api'

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Desktop() {
  const [search, setSearch] = useState('')
  const [plates, setPlates] = useState([])

  const { user, signOut } = useAuth()

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?titleOrTags=${search}`)
      setPlates(response.data)
    }

    fetchPlates()
  }, [search])

  return (
    <DesktopMenuContainer>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <>
          <div className="content flex items-center justify-center">
            <Logo admin />
          </div>
        </>
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <>
          <div className="content flex items-center justify-center">
            <Logo />
          </div>
        </>
      )}
      <Search>
        <div className="flex items-center justify-center">
          <MagnifyingGlass size={24} color="#C4C4CC" />
          <input
            type="text"
            className=""
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul>
          {search.length > 0 &&
            plates.map((plate, index) => (
              <li key={index}>
                <Link to={`/details/${plate.id}`} className="flex items-center">
                  <img
                    src={`${api.defaults.baseURL}/files/${plate.picture}`}
                    alt=""
                    loading="lazy"
                  />
                  <span>{plate.title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </Search>

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <Link to="/new" className="flex items-center justify-center">
          Novo prato
        </Link>
      )}

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <Link to="/requests" className="flex items-center justify-center">
          <Receipt size={32} />
          Pedidos
          <div className="flex items-center justify-center">
            <span>(</span>
            <span>0</span>
            <span>)</span>
          </div>
        </Link>
      )}

      <button onClick={signOut}>
        <SignOut size={32} />
      </button>
    </DesktopMenuContainer>
  )
}
