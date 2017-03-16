import React, {Component} from 'react'
import Head from '../components/Header'
import Foot from '../components/Footer'

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Head />
        <div className='container'>
          {this.props.children}
        </div>
        <Foot />
      </div>
    )
  }
}
