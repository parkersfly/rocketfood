import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 15.8rem 5.6rem 0;

  > a {
    img {
      width: 4.3rem;
      height: 4.3rem;
    }

    strong {
      font-size: 3.7rem;
    }

    margin-bottom: 7.3rem;
  }

  > div {
    width: 100%;
    max-width: 40rem;
  }

  @media (min-width: 1280px) {
    flex-direction: row !important;
    padding: 0 10rem;
    justify-content: space-around;

    > a {
      img {
        width: 4.9rem;
        height: 4.7rem;
      }

      strong {
        font-size: 4.2rem;
      }
    }
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;

  > h1 {
    display: none;
  }

  > a,
  button {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;
  }

  @media (min-width: 1280px) {
    width: 47.6rem;
    height: max-content;
    border-radius: 1.6rem;
    padding: 6.4rem;
    background: ${({ theme }) => theme.COLORS.DARK_700};

    > h1 {
      display: block;
    }

    > h1 {
      display: block;
      font-weight: 400;
    }

    > div {
      width: 34.8rem;
    }
  }
`
