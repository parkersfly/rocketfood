import { Container } from './styles'

import '@splidejs/react-splide/css'

import { Splide, SplideTrack } from '@splidejs/react-splide'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'

export function Carousel({ children }) {
  return (
    <Container>
      <Splide
        hasTrack={false}
        options={{
          autoWidth: true,
          focus: 'center',
          // type: 'loop',
          gap: '16px',
          trimSpace: 'move',
          // omitEnd: true,
          mediaQuery: 'min',
          breakpoints: {
            1024: {
              focus: 0,
              type: 'loop',
              gap: '27px',
            },
          },
        }}
      >
        <SplideTrack>{children}</SplideTrack>

        <div className="splide__arrows">
          <button className="splide__arrow splide__arrow--prev">
            <CaretLeft />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <CaretRight />
          </button>
        </div>
      </Splide>
    </Container>
  )
}
