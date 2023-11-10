import { Container } from './styles'

import close from '../../../assets/close.svg'
import { MagnifyingGlass } from '@phosphor-icons/react'

import { Input } from '../../../components/Input'
import { Footer } from '../../../components/Footer'

import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hooks/auth'

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

        <div className='logout'>
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