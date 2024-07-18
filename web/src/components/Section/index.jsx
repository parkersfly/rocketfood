import { CarouselSectionContainer } from './styles'
import { SplideSlide } from '@splidejs/react-splide'

import { useEffect, useState } from 'react'

import { api } from '../../services/api'

import { Carousel } from '../Carousel'
import { Card } from '../../pages/Home/Card'

export function CarouselSection({ title, category }) {
  const [plates, setPlates] = useState([])

  function MapPlatesCategory(category) {
    return plates.map(
      (plate) =>
        plate.category === category && (
          <SplideSlide key={String(plate.id)}>
            <Card key={String(plate.id)} data={plate} />
          </SplideSlide>
        ),
    )
  }

  useEffect(() => {
    async function fetchPlates() {
      const response = await api.get('/plates')

      setPlates(response.data)
    }

    fetchPlates()
  }, [])

  return (
    <CarouselSectionContainer className="flex column">
      <h3>{title}</h3>
      <Carousel>{MapPlatesCategory(category)}</Carousel>
    </CarouselSectionContainer>
  )
}
