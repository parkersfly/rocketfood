import {
  OrdersContainer,
  OrderDetails,
  DisheDetails,
  Payment,
  FinalizePayment,
  PaymentMethods,
  CardInfoPayment,
  DisheDetailsCard,
} from './styles'

import React, { useState } from 'react'
import QRCode from 'qrcode.react'
import { v4 as uuidv4 } from 'uuid'

import bolinhos from '../../assets/plates/bolinhos.jpg'
import pix from '../../assets/icons/pix.svg'

import { ChefHat, BadgeX, CreditCard } from 'lucide-react'

import { Button } from '../../components/Button'

export function Orders() {
  const [qrData, setQrData] = useState(uuidv4())
  const [dishe, setDishe] = useState(true)
  const [pix, setPix] = useState(true)
  const [card, setCard] = useState(false)

  function generateNewQRCode() {
    setQrData(uuidv4())

    setPix(true)
    setCard(false)
  }

  function handlePaymentWithCard() {
    setPix(false)
    setCard(true)
  }

  return (
    <OrdersContainer>
      <OrderDetails>
        <DisheDetails>
          <h3>Meu pedido</h3>

          {dishe ? (
            <div className="cardsWrapper">
              <DisheDetailsCard>
                <img src={bolinhos} alt="" />
                <div>
                  <div>
                    <p>1 x Salada Radish</p>
                    <span>R$ 25,97</span>
                  </div>

                  <button>Excluir</button>
                </div>
              </DisheDetailsCard>
            </div>
          ) : (
            <button className="noOrder">
              <div>
                <p>Opss...Nada encontrado</p>
                <BadgeX />
              </div>

              <div>
                <p>Escolha um prato em nosso cardápio</p>
                <ChefHat />
              </div>
            </button>
          )}
        </DisheDetails>

        <div>
          <p>Total: R$ 103,88</p>

          <div>
            <Button text="Avançar" />
          </div>
        </div>
      </OrderDetails>

      <Payment>
        <h3>Pagamento</h3>

        <FinalizePayment>
          <div>
            <button onClick={generateNewQRCode}>
              <img src={pix} alt="" />
              <span>PIX</span>
            </button>

            <button onClick={handlePaymentWithCard}>
              <CreditCard />
              <span>Crédito</span>
            </button>
          </div>

          <PaymentMethods>
            {pix && <QRCode value={qrData} />}

            {card && (
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
            )}
          </PaymentMethods>
        </FinalizePayment>
      </Payment>
    </OrdersContainer>
  )
}
