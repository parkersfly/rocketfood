import { Check } from 'lucide-react'
import { Container } from './styles'

export function Input({ icon: Icon, htmlFor, labelTitle, title, ...rest }) {
  return (
    <Container>
      <p>{title}</p>
      <div>
        {Icon && Icon === Check ? (
          <Icon size={24} color="#10b981" />
        ) : (
          Icon && <Icon size={24} />
        )}
        <input {...rest} />
        <label htmlFor={htmlFor}>{labelTitle}</label>
      </div>
    </Container>
  )
}
