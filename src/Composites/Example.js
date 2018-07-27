import React from 'react'
import { Text, Subhead, Row, Column, Container } from 'Primitives'
import styled from 'styled-components'
import { Example, RouteInfo } from 'Components'

// Example of overriding or adding to styles of a Primitive
const PaddedSubhead = styled(Subhead)`
  padding-bottom: 10px;
`

export default props => (
  <Container>
    <PaddedSubhead>Default Composite</PaddedSubhead>
    <Text>This Composite can be found in src/Composites/index.js</Text>
    <Row my={4}>
      <Column>
        <RouteInfo {...props} />
      </Column>
      <Column>
        <Example customComponentTitle='Keeping Up To State' />
      </Column>

    </Row>
  </Container>
)
