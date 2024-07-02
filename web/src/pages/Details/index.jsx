import { Container, Content } from './styles'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { USER_ROLE } from '../../utils/role'
import { useAuth } from '../../hooks/auth'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { CaretLeft, Receipt, Minus, Plus } from '@phosphor-icons/react'
import { api } from '../../services/api'

import { useEffect, useState } from 'react'

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

  return (
    <Container>
      <Content>
        <button className="poppins" onClick={handleBack}>
          <CaretLeft size={32} />
          voltar
        </button>
        {data && (
          <main className="flex column justify-center items-center">
            <img src={plateImage} alt="" />

            <div className="info">
              <h3 className="poppins">{data.title}</h3>

              <p className="poppins">{data.description}</p>

              {data.tags && (
                <div className="tagsWrapper">
                  {data.tags &&
                    data.tags.map((tag) => (
                      <li key={String(tag.id)}>
                        <Tag text={tag.name} />
                      </li>
                    ))}
                </div>
              )}

              {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <div className="qntdAndPrice flex justify-center">
                  <div className="count flex items-center">
                    <button onClick={handleRemoveItem}>
                      <Minus size={24} />
                    </button>

                    <p className="roboto robotoBigBold">
                      {qntd > 9 ? qntd : `0${qntd}`}
                    </p>

                    <button onClick={handleAddItem}>
                      <Plus size={24} />
                    </button>
                  </div>

                  <Button
                    className="poppins buttonMobile"
                    text={`pedir ∙ ${data.price}`}
                    icon={Receipt}
                  />

                  <Button
                    className="poppins buttonWeb"
                    text={`incluir ∙ R$ ${data.price}`}
                  />
                </div>
              )}

              {[USER_ROLE.ADMIN].includes(user.role) && (
                <Link to="/edit">
                  <Button
                    className="poppins poppins100Medium"
                    text="Editar prato"
                  />
                </Link>
              )}
            </div>
          </main>
        )}
      </Content>
    </Container>
  )
}
