import { Container, Content, DisheDetails } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { QntdAndPrice } from './qntd-and-price'

import { USER_ROLE } from '../../utils/role'
import { useAuth } from '../../hooks/auth'

import { CaretLeft } from '@phosphor-icons/react'
import { api } from '../../services/api'

import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function Details() {
  const { user } = useAuth()
  const [data, setData] = useState({})
  const [plateImage, setPlateImage] = useState()
  const [qntd, setQntd] = useState(1)

  function handleAddItem() {
    setQntd(qntd + 1)
  }

  function handleRemoveItem() {
    if (qntd > 1) {
      setQntd(qntd - 1)
    }
  }

  const params = useParams()
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  useEffect(() => {
    async function fetchPlate() {
      const response = await api.get(`/plates/${params.id}`)
      setData(response.data)
      setPlateImage(`${api.defaults.baseURL}/files/${response.data.picture}`)
    }

    fetchPlate()
  }, [params.id])

  const { title, description, price, tags } = data

  const editDish = `/edit/${params.id}`

  return (
    <Container>
      <Content>
        <div>
          <button onClick={handleBack}>
            <CaretLeft size={32} />
            voltar
          </button>
        </div>

        <main className="flex column justify-center items-center">
          <img src={plateImage} alt="" />
          <DisheDetails>
            <div>
              <h3>{title}</h3>

              <p>{description}</p>

              {tags && (
                <div className="tagsWrapper">
                  {tags &&
                    tags.map((tag) => (
                      <li key={String(tag.id)}>
                        <Tag text={tag.name} />
                      </li>
                    ))}
                </div>
              )}
            </div>

            {[USER_ROLE.CUSTOMER].includes(user.role) && (
              <QntdAndPrice
                price={price}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                qntd={qntd}
              />
            )}
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <Link to={editDish}>
                <Button text="Editar prato" />
              </Link>
            )}
          </DisheDetails>
        </main>
      </Content>
    </Container>
  )
}
