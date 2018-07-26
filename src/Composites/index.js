import React from 'react'
import {
  Text,
  Debug,
  Heading,
  Subhead,
  Row,
  Column,
  Container
} from 'Primitives'
import styled from 'styled-components'
import DefaultComponent from 'Components'

// Example of overriding or adding to styles of a Primitive
const PaddedSubhead = styled(Subhead)`
  padding-bottom: 10px;
`

export default props => (
  <Container>
    <Heading>Default Composite</Heading>
    <Text>This Composite can be found in src/Composites/index.js</Text>
    <Row my={4}>
      <Column>
        <PaddedSubhead>URL Path Information</PaddedSubhead>
        <Debug>{props}</Debug>
      </Column>
      <Column>
        <PaddedSubhead>Components</PaddedSubhead>
        <DefaultComponent />
      </Column>

    </Row>
  </Container>
)
