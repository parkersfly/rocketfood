import { Container } from './styles'

import close from '../../../assets/close.svg'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { useAuth } from '../../../hooks/auth'

import { Input } from '../../../components/Input'
import { Footer } from '../../../components/Footer'
import { useNavigate, Link } from 'react-router-dom'

export function Menu(){

  const navigate = useNavigate()

  const { signOut } = useAuth()

  function handleBack(){
    navigate(-1)
  }

  function handleSignOut(){
    navigate(-1)
    signOut()
  }

  return(
    <Container>
      <header>
        <button
        onClick={handleBack}
        >
          <img src={close} alt="" />
        </button>
        <p className="roboto">Menu</p>
      </header>

      <main>
        <Input 
        icon={MagnifyingGlass}
        placeholder="Busque por pratos ou ingredientes"
        />

        <div className='box'>
          <Link to="/new"
          className="poppins"
          >
            Novo prato
          </Link>
        </div>

        <div className='box'>
          <button
          className='poppins'
          onClick={handleSignOut}
          >
            Sair
          </button>
        </div>
      </main>

      <Footer />

    </Container>
  )
}