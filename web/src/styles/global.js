import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
   font-size: 1.6rem;
   background: ${({ theme }) => theme.COLORS.DARK_400};
   color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  button, input, a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  a {
    text-decoration: none;
  }

  a, button {
    transition: all 0.2s;
  }

  a:hover, button:hover {
    opacity: 0.9;
  }

  button {
    cursor: pointer;
  }

  /* Scrollbar */

  *::-webkit-scrollbar {
   width: .5rem;              
  }

  *::-webkit-scrollbar-track {
          
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.LIGHT_500};    
    border-radius: 999px;      
  }

  /*Utilities*/

  .h-full {
    height: 100%;
  }

  .flex {
    display: flex;
  }

  .items-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .column {
    flex-direction: column;
  }

  /*Fonts classes*/

  .poppins {
    font-family: 'Poppins', sans-serif;
  }

  .roboto {
    font-family: 'Roboto', sans-serif;
  }

  .poppins100Medium {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }

  .poppins200Medium {
    font-size: 20px;
    font-weight: 500;
    line-height: 160%;
  }

  .poppins300Bold {
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
  }

  .poppins300Regular {
    font-size: 24px;
    font-weight: 400;
    line-height: 140%;
  }

  .poppins400Medium {
    font-size: 32px;
    font-weight: 500;
    line-height: 140%;
  }

  .poppins500Medium {
    font-size: 40px;
    font-weight: 500;
    line-height: 140%;
  }

  .robotoSmallestRegular {
    font-size: 12px;
    font-weight: 400;
    line-height: 160%;
  }

  .robotoSmallerRegular {
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }

  .robotoSmallerBold {
    font-size: 14px;
    font-weight: 700;
    line-height: 160%;
  }

  .robotoSmallSpaced {
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }

  .robotoSmallRegular {
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
  }

  .robotoBigBold {
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }

  .robotoBiggerBold {
    font-size: 24px;
    font-weight: 700;
    line-height: automatic;
  }

  .robotoBiggestRegular {
    font-size: 32px;
    font-weight: 400;
    line-height: 160%;
  }

  .robotoGiantBold {
    font-size: 42px;
    font-weight: 700;
    line-height: automatic;
  }
`