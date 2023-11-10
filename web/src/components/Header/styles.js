import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 114px;

  padding: 56px 28px 24px;

  grid-area: header;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  h1 {
    font-size: 21px !important;
    margin-left: 8px;
  }

  button {
    background: none;
    border: none;
  }

  .mobileHeaderUser {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
    }

    .request {
      position: relative;

      div {
        width: 20px;
        height: 20px;

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
  }

  .mobileHeaderAdmin {
    display: flex;
    align-items: center;

    > div {
      width: 100%;

      p {
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        margin-left: 8px;
      }
    }
  }

  .webHeaderAdmin,
  .webHeaderUser {
    display: none;
  }

  @media (min-width: 1280px) {
    padding: 0 123px;

    a:nth-child(3) {
      width: 216px;
      height: 48px;
      border-radius: 5px;
      padding: 12px 32px;
      background: ${({ theme }) => theme.COLORS.TOMATO_100};
    }

    .webHeaderAdmin,
    .webHeaderUser {
      display: flex;
      gap: 32px;
      height: 100%;
    }

    .mobileHeaderAdmin,
    .mobileHeaderUser {
      display: none;
    }

    .webHeaderAdmin {
      > div:first-child {
        span {
          width: 100%;
          color: ${({ theme }) => theme.COLORS.CAKE_200};
          text-align: end;
        }
      }
    }

    .webHeaderUser {
      .p-0 {
        padding: 0;
      }
    }

    .logo {
      text-align: end;
    }
  }
`;

export const Search = styled.div`
  width: 50%;
  position: relative;

  > div {
    height: 48px;

    padding: 12px 14px;

    background: ${({ theme }) => theme.COLORS.DARK_900};
    border-radius: 5px;
    gap: 14px;

    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    input {
      width: 100%;
      background: none;
      border: none;
      outline: none;
    }
  }

  > ul {
    width: 100%;
    list-style: none;
    position: absolute;
    z-index: 2;
    
    li {
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      border-radius: 0 0 .5rem .5rem;
      
      button {
        padding: 1rem;
        gap: 1rem;
        z-index: 2;

        img {
          width: 5rem;
          height: 5rem;
          object-fit: cover;
          border-radius: 50%;
          
        }
      }
    }
  }
`;
