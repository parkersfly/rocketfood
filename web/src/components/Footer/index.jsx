import { Container } from './styles'

import footerPolygon from '../../assets/icons/footerPolygon.svg'

export function Footer() {
  return (
    <Container>
      <div>
        <img src={footerPolygon} alt="" />
        <p>food explorer</p>
      </div>

      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  )
}
