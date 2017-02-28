import React, { Component } from 'react'
import Layout from 'antd/lib/layout'

import '../style/App'
import 'antd/dist/antd.less'
const { Header, Footer } = Layout

export default class AppContainer extends Component {
  render() {
    return (
      <div className="appContainer">
          <Layout>
            <Header>Header</Header>
          </Layout>
          <div className="appContent">
              {this.props.children}
          </div>
          <Layout>
            <Footer>Footer</Footer>
          </Layout>
          {/*this.props.children?this.props.children:<div>容器页面</div>*/}
      </div>
    )
  }
}
