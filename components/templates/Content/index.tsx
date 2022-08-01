import React from 'react'
import { Container, Title } from './index.styles'

interface Props {
  pageTitle: string;
  children: React.ReactNode
}

const Content: React.FC<Props> = ({ pageTitle, children }) => {
  return (
    <Container>
      <Title>{ pageTitle }</Title>
      {children}
    </Container>
  )
}

export default Content