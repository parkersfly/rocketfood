import { Container } from './styles'

import { Link } from 'react-router-dom'
import { useState } from 'react'

import { Button } from '../../../components/Button'
import { USER_ROLE } from '../../../utils/role'
import { useAuth } from '../../../hooks/auth'

import { Heart, Minus, Plus } from '@phosphor-icons/react'
import { PencilIcon } from 'lucide-react'

import { api } from '../../../services/api'

export function Card({ data, ...rest }) {
  const { user } = useAuth()
  const [orders, setOrders] = useState(1)
  const [ordersInCart, setOrdersInCart] = useState([])

  const [plateImage, setPlateImage] = useState(
    `${api.defaults.baseURL}/files/${data.picture}`,
  )

  function handleAddItem() {
    setOrders((prevState) => prevState + 1)
  }

  function handleRemoveItem() {
    if (orders > 1) {
      setOrders(orders - 1)
    }
  }

  function addOrdersToCart() {
    console.log('a')
  }

  function handleFavoritePlate() {
    const favorite = document.querySelector('#favorite')

    console.log(data)
  }

  function displayAmountDishesToAddOrRemove() {
    if (orders > 9) {
      return orders
    } else {
      return `0${orders}`
    }
  }

  return (
    <Container {...rest}>
      {[USER_ROLE.ADMIN].includes(user.role) && (
        <Link to={`/edit/${data.id}`} className="pencil">
          <PencilIcon size={24} />
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

        <Link to={`/details/${data.id}`}>{`${data.title} ${'>'}`}</Link>

        <p className="cardDescription">{data.description}</p>

        <p className="price">R$ {data.price}</p>
      </div>
      {[USER_ROLE.CUSTOMER].includes(user.role) && (
        <div className="flex column items-center dishesAmount">
          <div className="addOrRemoveTheDishesAmount flex items-center">
            <button onClick={handleRemoveItem}>
              <Minus size={24} />
            </button>

            <p>{displayAmountDishesToAddOrRemove()}</p>

            <button onClick={handleAddItem}>
              <Plus size={24} />
            </button>
          </div>
          <Button onClick={addOrdersToCart} text="incluir" />
        </div>
      )}
    </Container>
  )
}
