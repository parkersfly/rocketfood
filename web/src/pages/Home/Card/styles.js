import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../../styles/resizeWindow'

export const Container = styled.div`
  width: 21rem;
  height: 29.2rem;
  padding: 2.4rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  > div {
    text-align: center;

    a {
      font-size: 1.4rem;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
  }

  img {
    width: 8.8rem !important;
    height: 8.8rem !important;
    object-fit: cover;
    border-radius: 999px;
  }

  .web {
    gap: 1.2rem;
  }

  .cardDescription {
    display: none;
  }

  .likeDishButton {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    background: none;
    border: none;

    &[data-add-dish-to-favorites='true'] {
      svg {
        color: ${({ theme }) => theme.COLORS.TOMATO_300};
      }
    }
  }

  .likeDishButton:active {
    animation: heartLiked 0.5s;
  }

  @keyframes heartLiked {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .likeDishButton .pencil {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;

    background: none;
    border: none;
  }

  .price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }

  .addOrRemoveTheDishesAmount {
    justify-content: space-between;
    gap: 1.4rem;

    button {
      background: none;
      border: none;
    }
  }

  > div:last-child {
    gap: 1.6rem;
    margin-top: 1.2rem;

    button {
      height: 3.2rem;
    }
  }

  .dishesAmount {
    max-width: 20.8rem;
    margin: 0 auto;
  }

  @media (min-width: ${RESIZE_WINDOW.MD}) {
    width: 30.4rem;
    height: 46.2rem;

    .web {
      gap: 1.5rem;
    }

    .addOrRemoveTheDishesAmount {
      p {
        font-size: 2rem;
        font-weight: 700;
      }
    }

    img {
      width: 17.6rem !important;
      height: 17.6rem !important;
    }

    > div {
      a {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    .price {
      font-size: 3.2rem;
      line-height: 160%;
    }

    .cardDescription {
      text-align: center;
      overflow: hidden !important;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-size: 1.4rem;
    }

    .dishesAmount {
      flex-direction: row;

      button {
        height: 4.8rem !important;
      }
    }
  }
`
