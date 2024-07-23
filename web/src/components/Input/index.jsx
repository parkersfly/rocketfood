import { Check } from 'lucide-react'
import { Container } from './styles'

export function Input({
  icon: Icon,
  title,
  nameClass,
  labelTitle,
  primary = false,
  ...rest
}) {
  return (
    <Container className={nameClass} primary={primary}>
      <p>{title}</p>
      <div>
        <input {...rest} />
        <label>
          {Icon && Icon === Check ? (
            <Icon size={24} color="#10b981" />
          ) : (
            Icon && <Icon size={24} />
          )}
          {labelTitle}
        </label>
      </div>
    </Container>
  )
}
