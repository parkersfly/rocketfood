import { Container, Banner } from './styles'

import cakeBanner from '../../assets/cakeBanner.png'
import cakeBannerWeb from '../../assets/cakeBannerWeb.png'

import { CarouselSection } from '../../components/Section'

export function Home() {
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

      <main className="flex column">
        <CarouselSection title="Refeição" category="refeicao" />
        <CarouselSection title="Sobremesas" category="sobremesas" />
        <CarouselSection title="Bebidas" category="bebidas" />
      </main>
    </Container>
  )
}
