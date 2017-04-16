import React, {Component} from 'react'
import {Card, Icon, Spin, Row, Col, Button} from 'antd'
import {fetch_spot} from '../../common/fetch'

export default class SpotNews extends Component {
  state = {}
  handleClick =()=>{
    fetch_spot()
      .then(
        data => console.log( data )
      )

  }
  render() {
    return (
      <div>
        <Row>
          <Col span={18}>123</Col>
          <Col span={6}>321</Col>
        </Row>
        <Button onClick={this.handleClick}>获取</Button>
      </div>
    )
  }
}