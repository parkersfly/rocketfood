import { Container } from './styles'

import footerPolygon from '../../assets/footerPolygon.svg'

export function Footer(){
  return(
    <Container>
      <div>
        <img src={footerPolygon} alt="" />
        <p className="roboto">food explorer</p>
      </div>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}