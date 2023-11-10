import styled from 'styled-components'

export const Container = styled.div`
  width: 21rem;
  height: 292px;
  padding: 24px;
  
  background: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 8px;

  position: relative;

  img {
    width: 88px;
    height: 88px;
    object-fit: cover;
  }

  .webDescription {
    display: none;
  }

  .heartNotClicked {
    position: absolute;
    top: 16px;
    right: 16px;
  
    background: none;
    border: none;
  }

  .heartClicked {
    display: none;
    position: absolute;
    top: 16px;
    right: 16px;
  
    background: none;
    border: none;
  }

  .pencil {
    position: absolute;
    top: 16px;
    right: 16px;
  
    background: none;
    border: none;
  }
  
  .cardInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    img {
      width: 88px;
      height: 88px;
      border-radius: 50%;
    }
  }

  .price {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  
  .count {
    justify-content: space-between;
    gap: 14px;

    button {
      background: none;
      border: none;
    }
  }

  > div:last-child {
    gap: 16px;
    margin-top: 12px;

    button {
      height: 32px;
    }

    > p:last-child {
      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }
  }

  @media(min-width: 1024px){
    width: 30.4rem;
    height: 46.2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    img {
      width: 176px;
      height: 176px;
    }

    .cardInfo {
      gap: 15px;

      img {
        width: 176px;
        height: 176px;
      }

      a {
        font-size: 24px;
        font-weight: 700;
      }

      .price {
        font-size: 32px;
        color: ${({ theme }) => theme.COLORS.CAKE_200};
      }
    }

    .webDescription {
      display: flex;
      text-align: center;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }

    > div:last-child {
      flex-direction: row;

      button {
        height: 48px;
      }

      p:last-child {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-size: 32px;
      }
    }

    .web {
      flex-direction: column !important;

      a {
        font-size: 24px;
        font-weight: bold;
      }

      
    }

  }
`