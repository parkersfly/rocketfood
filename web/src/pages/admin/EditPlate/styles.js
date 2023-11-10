import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
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
  gap: 24px;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  
  > button { 
    display: flex;
    align-items: center;
    
    background: none;
    border: none;
    
    font-size: 16px;
    
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  
  @media(min-width: 1368px){
    padding: 40px 124px;

    > button {
      font-size: 24px;
      font-weight: 700;
    }
  }
`

export const Form = styled.form`

  display: flex;
  flex-direction: column;
  gap: 24px;


  > h1 {
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  .divider1, .divider2 {
    gap: 24px;
  }

  .ingredientsList {
    p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
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

  .buttonWrapper {
    display: flex;
    gap: 32px;

    button:first-child{
      background: ${({ theme }) => theme.COLORS.DARK_800};
    }

    button {
      padding: 12px 20px;
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

    .buttonWrapper {
      justify-content: end;

      button {
        width: max-content
      }
    }
  }
`