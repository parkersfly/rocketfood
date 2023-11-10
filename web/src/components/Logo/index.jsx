import { Container } from './styles'

import polygon from '../../assets/polygon.svg'

export function Logo({ admin = false }){
  return(
    <Container
    admin={admin}
    className="flex items-center justify-center"
    >
      <img src={polygon} alt="" />
        <h1 className="roboto">food explorer</h1>
    </Container>
  )
}