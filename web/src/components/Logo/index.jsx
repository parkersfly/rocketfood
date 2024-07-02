import { Container } from './styles'

import polygon from '../../assets/icons/polygon.svg'

export function Logo({ admin = false }) {
  return (
    <Container to="/" className="flex items-center justify-center">
      <img src={polygon} alt="" />
      <div className="flex items-center">
        <strong>food explorer</strong>
        {admin ? <span>admin</span> : <></>}
      </div>
    </Container>
  )
}
