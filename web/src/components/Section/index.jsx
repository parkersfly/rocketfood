import { Container } from './styles'
import { Carousel } from '../Carousel'
import { SwiperSlide } from 'swiper/react'

export function Section({ title, children }) {
  return (
    <Container>
      <h3 className="poppins">{title}</h3>
      <Carousel>{children}</Carousel>
    </Container>
  )
}
