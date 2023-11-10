import { Container } from './styles'

export function Section({ title, children }){
  return(
    <Container>
      <h3 className="poppins">{ title }</h3>
      <div className="flex">
        { children }
      </div>
    </Container>
  )
}