import React, {Component} from 'react'
import {Layout, Carousel} from 'antd'
import {comments} from '../common/mock'
import {Link} from 'react-router'
import {fetch_movieDetail} from '../common/fetch'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  state = {}

  render() {
    return (
      <div>
        <Carousel autoplay dots='fasle'>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    )
  }
}
