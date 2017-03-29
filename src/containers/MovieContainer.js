import React, { Component } from 'react'
import {Layout, Spin, Alert} from 'antd'
import MovieMenu from '../components/MovieMenu'
import MovieColumn from '../components/MovieColumn'

import 'antd/dist/antd.less'

const {Content, Sider} = Layout

export default class MovieContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Layout>
          <Sider>
            <MovieMenu />
          </Sider>
          <Content>
            <MovieColumn
              id='hotShowing'
              title='正在热映'
              type='in_theaters'
              total={30}
            />
            <MovieColumn
              id='comingSoon'
              title='即将上映'
              type='coming_soon'
              total={30}
            />
            <MovieColumn
              id='Top25'
              title='Top25'
              type='top250'
              total={25}
            />
            <MovieColumn
              id='usBox'
              title='北美票房榜'
              type='us_box'
              total={11}
            />
          </Content>
        </Layout>
      </div>
    )
  }
}
