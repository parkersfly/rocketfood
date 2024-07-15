import { Container } from './styles'

export function Button({ icon: Icon, text, ...rest }) {
  return (
    <Container
      className="flex items-center justify-center"
      type="button"
      {...rest}
    >
      {Icon && <Icon size={34} />}
      {text}
    </Container>
  )
}
