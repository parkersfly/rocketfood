import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";
    `;

export const Content = styled.div`
  padding: 0 56px;

  > button:first-child {
    background: none;
    border: none;

    font-size: 24px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;

    margin-top: 30px;
  }
  
  .info {
    grid-area: content;
    gap: 24px;
    text-align: center;

    h3 {
      width: 100%;
      font-size: 27px;
      font-weight: 500;
      margin-top: 16px;
    }

    .tagsWrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;
    }

  }

  > main {
    button:last-child {
      margin: 48px 0;
    }
  }
    

  @media(min-width: 1368px){
    padding: 24px 123px;

    > button:first-child {
      font-weight: bold;
      margin-top: 8px;
    }

    .buttonMobile {
      display: none !important;
    }

    .buttonWeb {
      display: flex !important;
    }

    > main {
      flex-direction: row;
      gap: 48px;

      img {
        width: 390px;
        height: 390px;
        object-fit: cover;
        margin-top: 42px;
      }
    }

    .info {
      text-align: start;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      h3 {
        font-size: 40px;
      }

      p {
        font-size: 24px;
      }
    }

    .tagsWrapper {
      text-align: start;
      justify-content: start !important;
      gap: 12px !important;
    }
  }
`