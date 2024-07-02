import { Container } from './styles'

import '@splidejs/react-splide/css'

import { Splide, SplideTrack } from '@splidejs/react-splide'

export function Carousel({ children }) {
  return (
    <Container>
      <Splide
        hasTrack={false}
        options={{
          // type: 'loop',
          autoWidth: true,
          focus: 'center',
          gap: '1rem',
        }}
      >
        <SplideTrack>{children}</SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">Prev</button>
          <button className="splide__arrow splide__arrow--next">Next</button>
        </div>
      </Splide>
    </Container>
  )
}
