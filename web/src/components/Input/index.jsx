import { Container } from './styles'

export function Input({ icon: Icon, htmlFor, labelTitle, title, ...rest }) {
  return (
    <Container>
      <p>{title}</p>
      <div>
        {Icon && <Icon size={24} />}
        <input {...rest} />
        <label htmlFor={htmlFor}>{labelTitle}</label>
      </div>
    </Container>
  )
}
