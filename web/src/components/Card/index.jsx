import { Container } from './styles'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '../../components/Button'
import { USER_ROLE } from '../../utils/role'
import { useAuth } from '../../hooks/auth'

import { Heart, Pencil, Minus, Plus } from '@phosphor-icons/react'
import { api } from '../../services/api'

export function Card({ data, ...rest }) {
  const { user } = useAuth()
  const [qntd, setQntd] = useState(1)

  const [plateImage, setPlateImage] = useState(
    `${api.defaults.baseURL}/files/${data.picture}`,
  )

  function handleAddItem() {
    setQntd(qntd + 1)
  }

  function handleRemoveItem() {
    if (qntd > 1) {
      setQntd(qntd - 1)
    }
  }

  function handleFavoritePlate() {
    const favorite = document.querySelector('#favorite')

    console.log(data)
  }

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <Link to={`/edit/${data.id}`} className="pencil">
          <Pencil size={24} />
        </Link>
      )}
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <button
          id="favorite"
          onClick={handleFavoritePlate}
          className="heartNotClicked"
        >
          <Heart size={24} />
        </button>
      )}
      <div className="h-full flex column items-center justify-center web">
        <img src={plateImage} alt="" />

        <Link to={`/details/${data.id}`} className="poppins poppins100Medium">
          {`${data.title} ${'>'}`}
        </Link>

        <p className="webDescription roboto robotoSmallerRegular">
          {data.description}
        </p>

        <p className="roboto robotoSmallRegular price">R$ {data.price}</p>
      </div>
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <div className="flex column items-center dishesAmount">
          <div className="addAndRemoveTheDishesAmount flex items-center">
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
          <Button text="incluir" />
        </div>
      )}
    </Container>
  )
}
