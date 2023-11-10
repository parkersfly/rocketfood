import { Plus, X } from '@phosphor-icons/react'
import { Container } from './styles'

export function PlateItem({ isNew = false, value, onClick, ...rest}){
  return(
  <Container
  isNew={isNew}
  >
    <input 
    type="text"
    value={value}
    readOnly={!isNew} 
    className="roboto"
    {...rest}
    />
    <button
    type="button"
    onClick={onClick}
    >
      { !isNew ? <X /> : <Plus /> }
    </button>
  </Container>
  )
}