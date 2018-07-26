import React from 'react'
import { Text, Input, Debug } from 'Primitives'

export default class extends React.Component {
  state = {
    someVal: ''
  }
  handleChange = e => {
    this.setState({
      someVal: e.currentTarget.value
    })
  }

  render = props => (
    <React.Fragment>
      <Text>Hello from the src/Components/index.js file!</Text>
      <Input
        placeholder='Type here...'
        value={this.state.someVal}
        onChange={this.handleChange}
      />
      <p>{this.state.someVal || 'Type in the Input Box to change this text'}</p>
    </React.Fragment>
  )
}
