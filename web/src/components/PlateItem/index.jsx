import { Plus, X } from 'lucide-react'

import { Container } from './styles'

export function PlateItem({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {!isNew ? (
        <span>{value}</span>
      ) : (
        <input type="text" value={value} {...rest} />
      )}

      <button type="button" onClick={onClick}>
        {!isNew ? <X size={16} /> : <Plus size={16} />}
      </button>
    </Container>
  )
}
