import React from 'react'
import { Debug, Subhead } from 'Primitives'
import styled from 'styled-components'

// Example of overriding or adding to styles of a Primitive
const PaddedSubhead = styled(Subhead)`
  padding-bottom: 10px;
`

export default props => (
  <React.Fragment>
    <PaddedSubhead>URL Path Information</PaddedSubhead>
    <Debug>{props}</Debug>
  </React.Fragment>
)
