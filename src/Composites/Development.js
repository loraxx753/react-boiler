import React from 'react'
import { Api } from 'Primitives'
import { Debug } from 'Primitives'

export default props => (
  <Api colors path='id' params={{ hex: '24B1E0' }}>
    {(data, response) => (
      <React.Fragment>
        <Debug>{response}</Debug>
        <Debug>{data}</Debug>
      </React.Fragment>
    )}
  </Api>
)
