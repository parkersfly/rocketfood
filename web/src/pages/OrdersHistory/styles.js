import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const OrdersHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  margin: 0 auto;
  padding: 5.6rem 3.5rem;

  > h3 {
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .webTitle {
    display: none;
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    padding: 3.4rem 0 5.6rem;
    gap: 3.4rem;

    .webTitle {
      display: block;
    }

    .mobileTitle {
      display: none;
    }
  }
`

export const OrdersHistoryTable = styled.table`
  display: none;

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    display: block;

    width: 100%;
    max-width: 112rem;

    border-collapse: collapse;
    border: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 0.8rem 0.8rem 0 0;
    overflow: hidden;

    .select-dishe-status {
      display: flex;
      align-items: center;
      padding: 1.6rem;
      border-radius: 0.5rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      position: relative;
    }

    select {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      appearance: none;
      background: transparent;
      border: none;
    }

    td,
    th {
      border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }

    th {
      padding: 2.1rem 2.4rem;
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    td {
      padding: 1.6rem 2.4rem;
    }

    td {
      div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        svg {
          &[data-order-status='Pendente'] {
            color: ${({ theme }) => theme.COLORS.TOMATO_300};
          }

          &[data-order-status='Preparando'] {
            color: ${({ theme }) => theme.COLORS.CARROT_100};
          }

          &[data-order-status='Entregue'] {
            color: ${({ theme }) => theme.COLORS.MINT_100};
          }
        }
      }
    }

    td,
    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`

export const OrdersHistoryCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  .orderStatusCard {
    width: 100%;
    max-width: 57rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 3.1rem;
    padding: 1.6rem 2rem;
    border-radius: 0.8rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};

    p {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        &[data-order-status='Pendente'] {
          color: ${({ theme }) => theme.COLORS.TOMATO_300};
        }

        &[data-order-status='Preparando'] {
          color: ${({ theme }) => theme.COLORS.CARROT_100};
        }

        &[data-order-status='Entregue'] {
          color: ${({ theme }) => theme.COLORS.MINT_100};
        }
      }
    }
  }

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    display: none;
  }
`
