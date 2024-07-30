import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const OrdersContainer = styled.div`
  width: 100%;
  max-width: 112rem;
  height: 100vh;
  padding: 5.6rem 3.5rem;

  margin: 0 auto;

  display: flex;
  gap: 7.5rem;
`

export const OrderDetails = styled.section`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.6rem;

  &[data-display-order-details-section='false'] {
    display: none;

    .priceAndNextStep {
      display: none;
    }
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 4.7rem;

    p {
      font-size: 2rem;
      line-height: 1;
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    div {
      display: flex;
      justify-content: end;

      button {
        width: 65%;
        height: 4.8rem;
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    height: 48rem;
    margin: 0;

    &[data-display-order-details-section='false'] {
      display: flex;
    }

    div {
      button {
        display: none;
      }
    }
  }
`

export const DisheDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  > h3 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .cardsWrapper {
    max-height: 52rem;
    overflow-y: auto;
  }

  .noOrder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 2rem;

    border-radius: 0.8rem;
    color: #c6c6c6;
    border: dashed 2px ${({ theme }) => theme.COLORS.GRAY_700};

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    &:hover {
      border: solid 2px ${({ theme }) => theme.COLORS.GRAY_700};
      opacity: 0.8;
    }
  }
`

export const DisheDetailsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  height: 10.4rem;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    object-fit: cover;
    border-radius: 9999px;
  }

  > div {
    div {
      display: flex;
      gap: 1rem;

      p {
        font-size: 2rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.2rem;
        line-height: 2.5;
      }
    }

    button {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.COLORS.TOMATO_400};
    }
  }
`

export const Payment = styled.section`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  display: none;

  > h3 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  &[data-display-payment-section='true'] {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    &[data-display-payment-section='false'] {
      display: flex;
      flex-direction: column;
      gap: 3.2rem;
    }
  }
`

export const FinalizePayment = styled.div`
  width: 100%;

  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
  border-radius: 0.8rem;

  > div {
    width: 100%;
    display: flex;
    background: transparent;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

    > button {
      width: 50%;
      height: 8.1rem;

      border-radius: 0.8rem 0 0 0;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;

      &:focus {
        background: ${({ theme }) => theme.COLORS.DARK_800};
      }
    }

    button:nth-child(2) {
      border-radius: 0 0.8rem 0 0;
    }
  }
`

export const PaymentMethods = styled.div`
  min-height: 24.2rem;
  padding: 0 2.7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  .paymentStatus {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    opacity: 0.6;

    > p {
      font-size: 2rem;
      font-weight: bold;
    }
  }
`

export const CardInfoPayment = styled.form`
  width: 100%;
  max-width: 34.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.7rem;

  margin: 5.7rem 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .boxValidityAndCVC {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.7rem;

    > div {
      border: none !important;

      div {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }

  > button {
    height: 4.8rem;

    svg {
      display: none;
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    > button {
      svg {
        display: block;
      }
    }
  }
`
