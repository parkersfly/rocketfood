import styled from 'styled-components'

export const Container = styled.div`
  overflow-y: hidden;
  height: 100vh;

  display: grid;
  grid-template-rows: 114px auto 7.7rem;
  grid-template-areas: 
  "header"
  "content"
  "footer"
  ;

  > main {
    width: 100%;
    padding-left: 2.4rem;
    overflow-y: auto;
    
    section {
      margin-top: 6.2rem;
    }
    
     .swiper {
      width: 100%;
      max-width: 130rem;
      height: 100%;
      cursor: grab;
    }

    .swiper-slide {
      text-align: center;
      font-size: 1.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-button-prev:after, 
    .swiper-button-next:after {
      display: none;
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    } 

    .swiper-pagination {
       display: none;
    } 
  }
  
  .mainContent {
    max-width: 130rem;
  }

  .inner {
    gap: 2.7rem;
  }
  
  .carousel {
    cursor: grab;
    overflow: hidden;
  }

  @media(min-width: 600px){
    > main {
      padding: 0 5rem;
    }
  }

  @media(min-width: 1368px){
    > main {
      padding: 0 123px;
    }
  }
`

export const Banner = styled.div`
  width: 100%;
  height: 120px;
  
  border-radius: 3px;
  
  margin-top: 44px;

  display: flex;
  justify-content: center;
  
  > div {
    width: 100%;
    position: relative;
    margin: 0 1.6rem 0 1.2rem;
    display: flex;
    align-items: center;
    justify-content: end;
    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding-right: .8rem;

    .webImage {
      display: none;
    }

    .mobileImage {
      margin: -3rem 0 0 -3rem;
      position: absolute;
      left: 0;
      top: 0;
    }

    .bannerTitle {
      width: 57%;
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

  @media(min-width: 768px){
    > div {

    }
  }

  @media(min-width: 1280px){
    height: 260px;
    margin-top: 164px;

    .webImage {
      display: block !important;
      margin-top: -12.4rem;
      margin-left: -9.55rem;
    }

    .mobileImage {
      display: none;
    }

    > div {
      padding-right: 10rem;
      
      h2 {
        font-size: 40px;
        font-weight: 500;
        margin: 0;
      }

      p {
        font-family: Roboto;
        font-size: 16px;
      }
    }
  }
`