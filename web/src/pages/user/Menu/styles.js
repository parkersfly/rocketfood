import styled  from "styled-components";

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

  > header {
    height: 114px;

    grid-area: header;

    display: flex;
    align-items: center;
    gap: 16px;
    padding: 56px 28px 24px;

    background-color: ${({ theme }) => theme.COLORS.DARK_700}; 

    button {
      background: none;
      border: none;
    }

    p {
      font-size: 21px;
    }
  }

  > main {
    padding: 0 28px;

    div:first-child {
      margin-top: 28px;
    }

    .logout {
      padding: 10px;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
      margin-top: 36px;

      button {
        background: none;
        border: none;

        font-size: 24px;
        font-weight: 300;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }
  }
`