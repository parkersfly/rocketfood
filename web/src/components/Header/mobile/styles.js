import styled from 'styled-components'

export const NavMobileContainer = styled.div`
  width: 100%;

  justify-content: space-between;

  .logoAdmin {
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: none;
  }
`

export const Order = styled.div`
  .request {
    position: relative;

    div {
      width: 2rem;
      height: 2rem;

      position: absolute;
      top: -3px;
      right: -6px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    }
  }
`
