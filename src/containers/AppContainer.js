import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='wrap center'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
