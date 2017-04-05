import React, {Component} from 'react'
import {Layout} from 'antd'
import MovieMenu from '../components/MovieMenu'

import 'antd/dist/antd.less'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Sider>
          <MovieMenu />
        </Sider>
        <Content className='content'>
          1234
        </Content>
      </Layout>
    )
  }
}
