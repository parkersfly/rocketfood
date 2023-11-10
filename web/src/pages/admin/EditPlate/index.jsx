import { Container, Form, Content } from './styles'

import { Header } from '../../../components/Header'
import { Input } from '../../../components/Input'
import { SelectInput } from '../../../components/Select'
import { PlateItem } from '../../../components/PlateItem'
import { Textarea } from '../../../components/Textarea'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export function EditPlate(){

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

  function handleSaveChange(){
    navigate("/")
  }

  return(
    <Container>
      <Header admin/>
      <Content
      className="flex column"
      >
        <button 
        onClick={handleBack}
        className="poppins"
        >
          <CaretLeft size={22}/>
          voltar
        </button>

        <h1
        className="poppins poppins400Medium"
        >Editar prato</h1>


      <Form>
        <div className="divider1 flex column">
          <Input 
          type="file"
          title="Imagem do prato"
          icon={UploadSimple}
          labelTitle="Selecione a imagem para alterá-la"
          htmlFor="plateImage"
          id="plateImage"
          />

          <Input 
          type="text"
          title="Nome"
          placeholder="Ex.: Salada Ceasar"
          value="Salada César"
          />

          <SelectInput />
        </div>

        <div className="divider2 flex column">
          <div className="ingredientsList">
            <p
            className="roboto robotoSmallRegular"
            >Ingredientes</p>
            <div className="ingredients">
              <PlateItem 
              value="tomate"
              />
              <PlateItem 
              isNew 
              placeholder="Adicionar"
              />
            </div>
          </div>


          <Input 
          title="Preço"
          placeholder="R$ 00,00"
          value="R$ 40,00"
          />
        </div>


        <div className="description">
          <p
          className="roboto"
          >Descrição</p>
          <Textarea 
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          value={"A Salada César é uma opção refrescante para o verão."}
          />
        </div>

        <div className='buttonWrapper'>
          <Button 
          text="Excluir prato"
          />

          <Button 
          onClick={handleSaveChange}
          text="Salvar alterações"
          />
        </div>
      </Form>
      </Content>
      <Footer />
    </Container>
  )
}