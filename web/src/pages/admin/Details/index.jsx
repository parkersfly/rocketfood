import { Container, Content } from './styles'

import { Header } from '../../../components/Header'
import { Footer } from '../../../components/Footer'
import { Tag } from '../../../components/Tag'
import { Button } from '../../../components/Button'

import salad from '../../../assets/plates/salad.png'

import { CaretLeft } from '@phosphor-icons/react'
import { useNavigate, Link } from 'react-router-dom'

export function Details(){

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleNavigateToEdit(){
    navigate("")
  }

  return(
    <Container>
      <Header admin/>
      <Content>
        <button
          onClick={handleBack}
          className="poppins"
        >
              <CaretLeft size={32}/>
              voltar
        </button>
        <main className="flex column justify-center items-center">

          <img src={salad} alt="" />

          <div className="shield">
            <div className="info flex column items-center justify-center">
              <h3
              className="poppins"
              >Salada Ravanello</h3>

              <p
              className="poppins"
              >
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              </p>
              
              <div className="tagsWrapper">
                <Tag text="alface"/>
                <Tag text="cebola"/>
                <Tag text="pão naan"/>
                <Tag text="pepino"/>
                <Tag text="rabanete"/>
                <Tag text="tomate"/>
              </div>
            </div>

            <Link to="/edit">
              <Button
              className="poppins poppins100Medium"
              text="Editar prato"
              />
            </Link>
              
          </div>

        </main>
      </Content>
      <Footer />
    </Container>
  )
}