import React from 'react'
import axios from 'axios'
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios
} from 'react-axios'
import { Debug } from 'Primitives'

const urls = {
  default: 'https://jsonplaceholder.typicode.com/',
  stocks: 'https://api.iextrading.com/1.0',
  colors: 'http://www.thecolorapi.com/'
}

export default class extends React.Component {
  constructor (props) {
    super(props)
    const apiType = Object.keys(props).filter(
      key => Object.keys(urls).indexOf(key) > -1
    )
    this.state = {
      axiosInstance: axios.create({
        baseURL: urls[apiType] || urls.default,
        timeout: 2000,
        crossdomain: true
        //   headers: { 'X-Custom-Header': 'foobar' }
      }),

      data: {}
    }
  }
  componentDidMount () {
    this.state.axiosInstance.get(this.props.path).then(resp =>
      this.setState({
        data: resp.data
      })
    )
  }

  render () {
    return (
      <AxiosProvider instance={this.state.axiosInstance}>
        <Get url={this.props.path} {...this.props}>
          {(error, response, isLoading, onReload) => {
            if (response !== null) {
              const { data, ...rest } = response
              if (this.props.children) return this.props.children(data, rest)
              else return <Debug>{data}</Debug>
            }
            return <div>Default message before request is made.</div>
          }}
        </Get>
      </AxiosProvider>
    )
  }
}
