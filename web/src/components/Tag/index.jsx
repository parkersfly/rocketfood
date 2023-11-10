import { Container } from './styles'

export function Tag({ text }){
  return(
    <Container
    className="poppins poppins100Medium"
    >
      { text }
    </Container>
  )
}