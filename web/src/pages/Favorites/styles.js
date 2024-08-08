import styled from 'styled-components'

export const FavoritesContainer = styled.div`
  height: 100vh;
  margin: 0 auto;
  padding: 5.6rem 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.7rem;

  > h3 {
    font-weight: 500;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`

export const FavoritesDishWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4.8rem;

  .card {
    width: 23.1rem;
    height: 10.4rem;

    display: flex;
    align-items: center;
    gap: 1.3rem;

    > img {
      width: 7.2rem;
      height: 7.2rem;
      object-fit: cover;
      border-radius: 9999px;
    }

    .card-info {
      width: 14.6rem;

      > strong {
        font-family: 'Poppins', sans-serif;
        font-size: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      > button {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.TOMATO_400};
      }
    }
  }
`
