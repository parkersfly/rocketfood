import { NavDesktopContainer, Search } from './styles'

import { Logo } from '../../Logo'

import { SignOut, MagnifyingGlass, Receipt } from '@phosphor-icons/react'

import { USER_ROLE } from '../../../utils/role'
import { useAuth } from '../../../hooks/auth'
import { api } from '../../../services/api'

import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Desktop() {
  const [search, setSearch] = useState('')
  const [plates, setPlates] = useState([])

  const { user, signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')

    signOut()
  }

  function clearSearch() {
    setSearch('')
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get(`/plates?titleOrTags=${search}`)
      setPlates(response.data)
    }

    fetchPlates()
  }, [search])

  return (
    <NavDesktopContainer>
      <div>
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
              value={search}
            />
          </div>
          <ul>
            {search.length > 0 &&
              plates.map((plate, index) => (
                <li key={index}>
                  <button onClick={clearSearch}>
                    <Link
                      to={`/details/${plate.id}`}
                      className="flex items-center"
                    >
                      <img
                        src={`${api.defaults.baseURL}/files/${plate.picture}`}
                        alt=""
                        loading="lazy"
                      />
                      <span>{plate.title}</span>
                    </Link>
                  </button>
                </li>
              ))}
          </ul>
        </Search>

        <nav>
          <ul className="linksNavWrapper">
            <li>
              <Link to="/favorites">Meus favoritos</Link>
            </li>
            <li>
              <Link to="/historic">Histórico de pedidos</Link>
            </li>
          </ul>
        </nav>
      </div>

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <Link to="/new" className="flex items-center justify-center">
          Novo prato
        </Link>
      )}

      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <Link to="/orders" className="flex items-center justify-center orders">
          <Receipt size={32} />
          Pedidos
          <div className="flex items-center justify-center">
            <span>(</span>
            <span>0</span>
            <span>)</span>
          </div>
        </Link>
      )}

      <button onClick={handleSignOut}>
        <SignOut size={32} />
      </button>
    </NavDesktopContainer>
  )
}
