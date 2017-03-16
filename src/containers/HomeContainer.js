import React, {Component} from 'react'
import {Layout} from 'antd'
import fetch from '../common/fetch'

import 'antd/dist/antd.less'
import SiderMenu from '../components/SiderMenu'
import TodoContainer from '../components/TodoContainer'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handle = this.handle.bind(this);
  }

  handle() {
    fetch();
  }

  render() {
    return (
      <Layout>
        <Sider>
          <SiderMenu />
        </Sider>
        <Content>
          <button onClick={
            this.handle
          }>aaa
          </button>
          <TodoContainer />
        </Content>
      </Layout>
    )
  }
}
