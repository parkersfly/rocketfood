import { Container, Banner, Section } from './styles'

import { useEffect, useState } from 'react'

// import { api } from '../../services/api'

import { Card } from '../../components/Card'
import { Carousel } from '../../components/Carousel'

import cakeBanner from '../../assets/cakeBanner.png'
import cakeBannerWeb from '../../assets/cakeBannerWeb.png'

import { SplideSlide } from '@splidejs/react-splide'

export function Home() {
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
    <Container>
      <Banner>
        <div>
          <img
            src={cakeBanner}
            alt=""
            className="mobileImage"
            decoding="async"
          />
          <img
            src={cakeBannerWeb}
            alt=""
            className="webImage"
            decoding="async"
            loading="lazy"
          />
          <div className="bannerTitle">
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
      </Banner>

      <main>
        <Section title="Refeições">
          <h2>Refeições</h2>
          <div>
            <Carousel>{MapPlatesCategory('refeicao')}</Carousel>
          </div>
        </Section>
        <Section title="Sobremesas">
          <h2>Sobremesas</h2>
          <div>
            <Carousel>{MapPlatesCategory('sobremesas')}</Carousel>
          </div>
        </Section>
        <Section title="Sobremesas">
          <h2>Bebidas</h2>
          <div>
            <Carousel>{MapPlatesCategory('bebidas')}</Carousel>
          </div>
        </Section>
      </main>
    </Container>
  )
}
