import { Container } from './styles'

export function Button({ icon: Icon, text, ...rest }){
  return(
    <Container
    className="flex items-center justify-center poppins poppins100Medium"
    type="button"
    {...rest}
    >
      { Icon && <Icon size={34}/> }
      { text }
    </Container>
  )
}