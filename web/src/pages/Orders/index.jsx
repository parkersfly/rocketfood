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
import pixSvg from '../../assets/icons/pix.svg'

import {
  ChefHat,
  BadgeX,
  CreditCard,
  Clock3,
  CheckCircle,
  Utensils,
} from 'lucide-react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Receipt } from '@phosphor-icons/react'

export function Orders() {
  const [qrData, setQrData] = useState(uuidv4())

  const [dishe, setDishe] = useState(true)
  const [pix, setPix] = useState(true)
  const [card, setCard] = useState(false)

  const [orderDetailsDisplay, setOrdersDetailsDisplay] = useState(true)
  const [paymentDisplay, setPaymentDisplay] = useState(false)

  const [awaitingPayment, setAwaitingPayment] = useState(false)
  const [approvedPayment, setApprovedPayment] = useState(false)
  const [deliveredOrder, setDeliveredOrder] = useState(false)

  function generateNewQRCode() {
    setQrData(uuidv4())

    setPix(true)
    setCard(false)
  }

  function handlePaymentWithCard() {
    setPix(false)
    setCard(true)
  }

  function handleProceedToPayment() {
    setOrdersDetailsDisplay(false)
    setPaymentDisplay(true)
  }

  function awaitingThePayment() {
    setCard(false)
    setAwaitingPayment(true)
  }

  return (
    <OrdersContainer>
      <OrderDetails data-display-order-details-section={orderDetailsDisplay}>
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

        <div className="priceAndNextStep">
          <p>Total: R$ 103,88</p>

          <div>
            <Button text="Avançar" onClick={handleProceedToPayment} />
          </div>
        </div>
      </OrderDetails>

      <Payment data-display-payment-section={paymentDisplay}>
        <h3>Pagamento</h3>

        <FinalizePayment>
          <div>
            <button onClick={generateNewQRCode}>
              <img src={pixSvg} alt="" />
              <span>PIX</span>
            </button>

            <button onClick={handlePaymentWithCard}>
              <CreditCard />
              <span>Crédito</span>
            </button>
          </div>

          <PaymentMethods>
            {pix && <QRCode value={qrData} size={166} bgColor="#76797B" />}

            {card && (
              <CardInfoPayment>
                <Input
                  title="Número do Cartão"
                  type="number"
                  placeholder="0000 0000 0000 0000"
                />

                <div className="boxValidityAndCVC">
                  <Input title="Validade" type="date" />
                  <Input title="cvc" type="number" placeholder="000" />
                </div>

                <Button
                  text="Finalizar pagamento"
                  icon={Receipt}
                  onClick={awaitingThePayment}
                />
              </CardInfoPayment>
            )}

            {awaitingPayment && (
              <div className="paymentStatus">
                <Clock3 size={96} />
                <p>Aguardando pagamento no caixa</p>
              </div>
            )}

            {approvedPayment && (
              <div className="paymentStatus">
                <CheckCircle size={96} />
                <p>Pagamento aprovado!</p>
              </div>
            )}

            {deliveredOrder && (
              <div className="paymentStatus">
                <Utensils size={96} />
                <p>Pedido entregue!</p>
              </div>
            )}
          </PaymentMethods>
        </FinalizePayment>
      </Payment>
    </OrdersContainer>
  )
}
