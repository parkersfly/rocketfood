import { Container } from './styles'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Input } from '../Input'
import { Footer } from '../Footer'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { USER_ROLE } from '../../utils/role'

import { useState, useEffect } from 'react'
import { api } from '../../services/api'
import { X } from 'lucide-react'

export function Menu({ menuIsOpen, setMenuIsOpen }) {
  const [search, setSearch] = useState('')
  const [plates, setPlates] = useState([])

  const { user } = useAuth()

  const { signOut } = useAuth()

  function handleSignOut() {
    signOut()
  }

  function clearSearch() {
    setMenuIsOpen(false)

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
    <Container data-menu-is-open={menuIsOpen}>
      <header>
        <button onClick={() => setMenuIsOpen(false)}>
          <X size={32} />
        </button>
        <p>Menu</p>
      </header>

      <main>
        <div>
          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            primary
          />

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
                      />
                      <span>{plate.title}</span>
                    </Link>
                  </button>
                </li>
              ))}
          </ul>
        </div>

        <div className="options">
          {[USER_ROLE.ADMIN].includes(user.role) && (
            <div className="optionBox">
              <Link to="/new">Novo prato</Link>
            </div>
          )}

          <div className="optionBox">
            <button onClick={handleSignOut}>
              <p>Sair</p>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
