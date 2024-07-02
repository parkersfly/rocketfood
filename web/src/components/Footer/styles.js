import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  height: 7.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2.4rem 2.8rem;

  > div {
    display: flex;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.LIGHT_700};

      margin-left: 0.6rem;
    }
  }

  > p {
    font-family: DM Sans;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (max-width)
`
