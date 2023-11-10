import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  ;
`

export const Content = styled.div`
  padding: 10px 32px 53px;  

  > button { 
    display: flex;
    align-items: center;

    font-size: 16px;

    background: none;
    border: none;

    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  
  @media(min-width: 1368px){
    padding: 40px 124px;

    > button {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 24px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .divider1, .divider2 {
    gap: 24px;
  }

  .price {
    .priceInput {
      height: 4.8rem;
      background: ${({ theme }) => theme.COLORS.DARK_900};
      padding: 1.2rem 1.4rem;
      border-radius: .5rem;

      input {
        background: none;
        border: none;
        outline: none;
      }
    }
  }

  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .ingredientsList {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    p {
      margin-bottom: 8px;
    }
  }

  .ingredients {
    width: 100%;
    padding: 8px;

    display: flex;
    align-items: center;
    gap: 16px;

    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    flex-wrap: wrap;
  }

  .description {
    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      margin-bottom: 8px;
    }
  }

  @media(min-width: 1368px){
    flex-direction: column;
    flex-wrap: wrap;

    .ingredientsList {
      width: 100%;
    }

    .divider1, .divider2 {
      width: 100%;
      flex-direction: row;
    }

    .saveButton {
      display: flex;
      justify-content: end;

      > button {
        width: max-content;
      }
    }
  }
`