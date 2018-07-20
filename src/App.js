import React, { Component } from 'react'
import { Provider as RebassProvider } from 'rebass'
import Composites from 'Composites'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <RebassProvider>
        <Route exact path='/' component={Composites} />
      </RebassProvider>
    )
  }
}

export default App
