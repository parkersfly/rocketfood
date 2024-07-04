import styled from 'styled-components'
import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.header`
  width: 100%;

  grid-area: header;
  padding: 5.6rem 2.8rem 2.8rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: ${RESIZE_WINDOW.XL}) {
    padding: 0 12.3rem;
  }
`
