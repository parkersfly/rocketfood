import { Circle } from '@phosphor-icons/react'
import {
  OrdersHistoryContainer,
  OrdersHistoryTable,
  OrdersHistoryCards,
} from './styles'
import { useState } from 'react'

import { USER_ROLE } from '../../utils/role'
import { useAuth } from '../../hooks/auth'

import { SelectInput } from './Select'

export function OrdersHistory() {
  const [orderStatus, setOrderStatus] = useState('Pendente')

  console.log(orderStatus)

  const { user } = useAuth()

  return (
    <OrdersHistoryContainer>
      <h3 className="webTitle">Histórico de pedidos</h3>
      <h3 className="mobileTitle">Pedidos</h3>

      <OrdersHistoryCards>
        <div className="orderStatusCard">
          <p className="orderCod">00000004</p>

          {[USER_ROLE.CUSTOMER].includes(user.role) && (
            <div>
              <Circle size={8} weight="fill" data-order-status={orderStatus} />
              <p>Pendente</p>
            </div>
          )}

          <p>20/05 às 18h00</p>

          <p className="description">
            1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
            Suco de Maracujá
          </p>

          {[USER_ROLE.ADMIN].includes(user.role) && (
            <SelectInput setOrderStatus={setOrderStatus} />
          )}
        </div>
      </OrdersHistoryCards>

      <OrdersHistoryTable>
        <thead>
          <tr>
            <th>Status</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {[USER_ROLE.ADMIN].includes(user.role) && (
                <SelectInput setOrderStatus={setOrderStatus} />
              )}

              {[USER_ROLE.CUSTOMER].includes(user.role) && (
                <div>
                  <Circle
                    size={8}
                    weight="fill"
                    data-order-status={orderStatus}
                  />
                  <p>{orderStatus}</p>
                </div>
              )}
            </td>

            <td>00000004</td>

            <td>
              1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
              Suco de Maracujá
            </td>

            <td>20/05 às 18h00</td>
          </tr>
        </tbody>
      </OrdersHistoryTable>
    </OrdersHistoryContainer>
  )
}
