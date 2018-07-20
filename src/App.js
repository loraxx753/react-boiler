import React, { Component } from 'react'
import { Provider as RebassProvider } from 'rebass'
import Composites from 'Composites'

class App extends Component {
  render () {
    return (
      <RebassProvider>
        <Composites />
      </RebassProvider>
    )
  }
}

export default App
