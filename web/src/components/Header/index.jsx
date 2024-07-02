import { Container } from './styles'

import { Mobile } from './mobile'
import { Desktop } from './desktop'

export function Header() {
  return (
    <Container className="flex items-center">
      <Mobile />
      <Desktop />
    </Container>
  )
}
