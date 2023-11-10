import styled from 'styled-components'
import { resizeWindow } from '../../../styles/resizeWindow'

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas: 
  "header"
  "content"
  ;
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;
  display: grid;
  grid-template-rows: 1fr 7.7rem;

  > main {
    height: 100%;
    margin-left: 2.4rem;

    > div {
      padding: 0 1.6rem 0 1.2rem;
    }
  } 

  .swiper {
      width: 100%;
      max-width: 130rem;
      cursor: grab;
    }

    .swiper-slide {
      width: max-content !important;
    }

    .swiper-button-prev:after, 
    .swiper-button-next:after {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    .swiper-pagination {
      /* display: none; */
    }

  @media(min-width: ${resizeWindow.XL}){
    > main {
      margin: 0 12.4rem;

      > div {
        padding: 0;
      }

      section {
        margin-bottom: 4.7rem;
      }
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 12rem;

  margin: 4.4rem 0 6.2rem 0;

  display: flex;
  justify-content: center;

  border-radius: .3rem;

  .mobileImg {
      margin: -3rem 0 0 -3rem;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 130rem;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding-right: .8rem;

    .webImg {
      display: none;
    }

    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      font-style: normal;
    }

    p {
        font-size: 1.2rem;
    }
  }  

  @media(min-width: ${resizeWindow.XL}){
    height: 26rem;
    margin-top: 17.2rem;
    
    .webImg {
      display: block !important;
      margin-left: -17.5rem;
      margin-bottom: 12.5rem;
    }
    
    .mobileImg {
      display: none;
    }
    
    > div {
      padding: 0;
      justify-content: center;

      h2 {
        font-size: 4rem;
        font-weight: 500;
        line-height: 140%;
      }
    }

  }
`