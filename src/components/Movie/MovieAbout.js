import React from 'react'
import {Card, Row, Col} from 'antd'
import {messages, correlations} from '../../common/mock'

const MovieAbout = () => {

  const messageList = messages.messageList.map(item=> (
    <div key={item.id}>
      <Row>
        <Col span={6}>
          <img src={item.url}/>
        </Col>
        <Col span={17} offset={1}>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </Col>
      </Row>
    </div>
  ));

  const correlationList = correlations.correlationList.map(item=> (
    <div key={item.id}>
      <Row>
        <Col span={6}>
          <img src={item.url}/>
        </Col>
        <Col span={16} offset={2}>
          <p>{item.title}</p>
          <p>{item.name}</p>
        </Col>
      </Row>
    </div>
  ));

  return (
    <Col span={5} offset={1} className='movie_about'>
      <Card title="相关电影" style={{marginBottom: 20}}>
        {correlationList}
      </Card>
      <Card title="电影资讯">
        {messageList}
      </Card>
    </Col>
  )
}

export default MovieAbout
