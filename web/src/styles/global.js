import { createGlobalStyle } from 'styled-components'

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
   background: ${({ theme }) => theme.COLORS.DARK_400};
   color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', sans-serif;
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
    background: none;
    border: none;
    cursor: pointer;
    line-height: 0;
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
`
