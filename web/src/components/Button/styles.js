import styled from 'styled-components'

import { RESIZE_WINDOW } from '../../styles/resizeWindow'

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  background: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: 0.5rem;
  border: none;

  font-size: 1.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;

  @media (min-width: ${RESIZE_WINDOW.LG}) {
    padding: 1.2rem 2.4rem;
    height: 5.6rem !important;
  }
`
