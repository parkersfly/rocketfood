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
`

export const Content = styled.div`
  grid-area: content;
  padding: 24px 56px;

  .buttonWeb {
    display: none !important;
  }

  > button {
    background: none;
    border: none;

    font-size: 24px;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    display: flex;
    align-items: center;

    margin-bottom: 16px;
  }

  .info {
    margin-top: 36px;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    h3 {
      font-size: 27px;
      font-weight: 500;
      margin-top: 16px;
      margin-bottom: 24px;

    }

    .tagsWrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 24px;

      margin-top: 24px;
    }

    .qntdAndPrice {
      display: flex;
      align-items: center;
      gap: 16px;

      margin-top: 48px;

      button {
        height: 38px;
        

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 9px;
        font-weight: 500;

        svg {
          width: 22px;
          height: 22px;
          margin-right: 5px;
        }
      }
    }
  }

  @media(min-width: 1368px){
    padding: 24px 123px;

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
      }
    }

    .info {
      text-align: start;

      h3 {
        font-size: 40px;
      }

      p {
        font-size: 24px;
      }
    }

    .tagsWrapper {
      justify-content: start !important;
      gap: 12px !important;
    }

    .qntdAndPrice {
      justify-content: start;

      > button {
        width: max-content;
        padding: 12px 24px;
        font-size: 14px !important;
      }
    }
  }
`