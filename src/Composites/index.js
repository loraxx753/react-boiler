import React from 'react'
import { Text, Debug, Heading, Subhead } from 'Primitives'
import DefaultComponent from 'Components'

export default props => (
  <React.Fragment>
    <Heading>Composites</Heading>
    <Text>Create Your Composites Here</Text>
    <Subhead>URL Path Information</Subhead>
    <Debug>{props}</Debug>

    <Subhead>Components</Subhead>
    <DefaultComponent />

  </React.Fragment>
)
