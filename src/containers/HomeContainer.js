import React, { Component } from 'react'

import Layout from 'antd/lib/layout'
import 'antd/dist/antd.less'
const { Content, Sider } = Layout

export default class HomeContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    )
  }
}
