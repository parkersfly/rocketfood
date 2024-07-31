import { Circle } from '@phosphor-icons/react'
import {
  OrdersHistoryContainer,
  OrdersHistoryTable,
  OrdersHistoryCards,
} from './styles'
import { useState } from 'react'

export function OrdersHistory() {
  const [orderStatus, setOrderStatus] = useState('Pendente')

  return (
    <OrdersHistoryContainer>
      <h3 className="webTitle">Histórico de pedidos</h3>
      <h3 className="mobileTitle">Pedidos</h3>

      <OrdersHistoryCards>
        <div className="orderStatusCard">
          <p>00000004</p>

          <div>
            <Circle size={8} weight="fill" />
            <p>Pendente</p>
          </div>

          <p>20/05 às 18h00</p>

          <p>
            1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x
            Suco de Maracujá
          </p>
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
              <div>
                <Circle
                  size={8}
                  weight="fill"
                  data-order-status={orderStatus}
                />
                <p>{orderStatus}</p>
              </div>
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
