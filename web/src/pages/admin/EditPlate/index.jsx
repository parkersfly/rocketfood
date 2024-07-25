import { Container, Form, Content } from './styles'

import { Input } from '../../../components/Input'
import { SelectInput } from '../../../components/Select'
import { PlateItem } from '../../../components/PlateItem'
import { Textarea } from '../../../components/Textarea'
import { Button } from '../../../components/Button'

import { api } from '../../../services/api'

import { CaretLeft, UploadSimple } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Check } from 'lucide-react'

export function EditPlate() {
  const [data, setData] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState()
  const [pictureFile, setPictureFile] = useState(null)

  const [tags, setTags] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [newTag, setNewTag] = useState('')

  const params = useParams()
  const navigate = useNavigate()

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag])
    setIngredients((prevState) => [...prevState, newTag])
    setNewTag('')
  }

  async function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))

    await api.delete(`/tags?id=${deleted.id}`)
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleDeletePlate() {
    await api.delete(`/plates/${params.id}`)

    alert('Prato excluído com sucesso!')
    navigate(-1)
  }

  async function handleUpdatePlate() {
    try {
      const fileUploadForm = new FormData()
      fileUploadForm.append('picture', pictureFile)
      fileUploadForm.append('title', title ?? data.title)
      fileUploadForm.append('category', category ?? data.category)
      fileUploadForm.append('tags', ingredients)
      fileUploadForm.append('price', price ?? data.price)
      fileUploadForm.append('description', description)

      await api.put(`/plates/${params.id}`, fileUploadForm)
    } catch (e) {
      console.log(e)
    }

    alert('Prato atualizado com sucesso!')
    navigate('/')
  }

  async function handleInsertPlateImage(event) {
    const file = event.target.files[0]

    setPictureFile(file)

    const picturePreview = URL.createObjectURL(file)
    setPicture(picturePreview)
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data)
      setTags(response.data.tags)
    }

    fetchPlate()
  }, [])

  return (
    <Container>
      <Content className="flex column">
        <button onClick={handleBack}>
          <CaretLeft size={22} />
          voltar
        </button>

        <h1>Editar prato</h1>

        <Form>
          <div className="divider1 flex column">
            <Input
              type="file"
              title="Imagem do prato"
              icon={picture ? Check : UploadSimple}
              labelTitle="Selecione a imagem"
              htmlFor="plateImage"
              nameClass="dish-image"
              id="plateImage"
              onChange={handleInsertPlateImage}
            />

            <Input
              type="text"
              title="Nome"
              nameClass="name"
              placeholder={data.title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <SelectInput
              nameClass="category"
              category={data.category}
              setCategory={setCategory}
              onClick={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="divider2 flex column">
            <div className="ingredientsList">
              <p>Ingredientes</p>
              <div className="ingredients">
                {tags.map((tag, index) => (
                  <PlateItem
                    key={index}
                    value={tag.name ? tag.name : tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))}
                <PlateItem
                  isNew
                  placeholder="Adicionar"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onClick={() => handleAddTag()}
                />
              </div>
            </div>

            <Input
              title="Preço"
              nameClass="price"
              type="text"
              placeholder={`R$ ${data.price}`}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="description">
            <p>Descrição</p>
            <Textarea
              placeholder={data.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="button-wrapper">
            <Button text="Excluir prato" onClick={handleDeletePlate} />

            <Button onClick={handleUpdatePlate} text="Salvar alterações" />
          </div>
        </Form>
      </Content>
    </Container>
  )
}
