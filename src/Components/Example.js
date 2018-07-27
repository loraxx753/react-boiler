import React from 'react'
import { Text, Input, Subhead } from 'Primitives'

export default class extends React.Component {
  state = {
    exampleValue: ''
  }
  handleChange = e => {
    this.setState({
      exampleValue: e.currentTarget.value
    })
  }

  render = () => (
    <React.Fragment>
      <Subhead>{this.props.customComponentTitle}</Subhead>
      <Text my={2}>Hello from the src/Components/index.js file!</Text>
      <Input
        placeholder='Type here...'
        value={this.state.exampleValue}
        onChange={this.handleChange}
      />
      <p>
        {this.state.exampleValue || 'Type in the Input Box to change this text'}
      </p>
    </React.Fragment>
  )
}
