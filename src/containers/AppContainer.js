import React, { Component } from 'react'
import Layout from 'antd/lib/layout'

import '../style/App'
import 'antd/dist/antd.less'
const { Header, Footer } = Layout

export default class AppContainer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="appContainer">
          <Header>Header</Header>	
          <div className="appContent">
              {this.props.children}
          </div>
          <Footer>Footer</Footer>	
          {/*this.props.children?this.props.children:<div>容器页面</div>*/}
      </div>
    )
  }
}
