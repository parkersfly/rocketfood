import {
  OrdersContainer,
  OrderDetails,
  DisheDetails,
  Payment,
  FinalizePayment,
  PaymentMethods,
  CardInfoPayment,
} from './styles'

import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { v4 as uuidv4 } from 'uuid'

export function Orders() {
  const [qrData, setQrData] = useState(uuidv4())

  function generateNewQRCode() {
    setQrData(uuidv4())
  }

  return (
    <OrdersContainer>
      <OrderDetails>
        <h3>Meu pedido</h3>

        <DisheDetails>
          <div>
            <img src="" alt="" />
            <div>
              <p>1 x Salada Radish</p>
              <button>Excluir</button>
            </div>
            <span>R$ 25,97</span>
          </div>
        </DisheDetails>

        <p>Total: R$ 103,88</p>
      </OrderDetails>

      <Payment>
        <h3>Pagamento</h3>

        <FinalizePayment>
          <button onClick={() => generateNewQRCode}>
            icon
            <span>PIX</span>
          </button>

          <button>
            icon
            <span>Crédito</span>
          </button>

          <PaymentMethods>
            <QRCode value={qrData} />

            <CardInfoPayment>
              <div>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <input type="number" />
              </div>

              <div>
                <label htmlFor="cardValidity">Validade</label>
                <input type="date" />
              </div>

              <div>
                <label htmlFor="cvc">CVC</label>
                <input type="number" />
              </div>

              <button type="submit">icon Finalizar pagamento</button>
            </CardInfoPayment>
          </PaymentMethods>
        </FinalizePayment>
      </Payment>
    </OrdersContainer>
  )
}
