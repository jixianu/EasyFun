import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Layout from 'antd/lib/layout'
import 'antd/dist/antd.less'
const { Content, Sider } = Layout

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.handle = this.handle.bind(this);
  }

  componentDidMount() {
  }
  handle() {
    fetchJsonp('https://api.douban.com/v2/book/1220562')
      .then(function(response) {
        return response.json()
      }).then(function(json) {
        console.log('parsed json', json.id)
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <button onClick={()=>{this.handle()}}>aaa</button>
        </Content>
      </Layout>
    )
  }
}
