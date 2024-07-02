import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
  width: 100%;
  height: 100vh;

  overflow: hidden;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
    'header'
    'content';
`

export const DefaultLayoutContent = styled.div`
  width: 100%;
  grid-area: content;

  overflow: auto;
`
