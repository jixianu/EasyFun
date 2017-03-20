import React, {Component} from 'react'
import {Layout, Pagination} from 'antd'
import fetch_movie from '../common/fetch'

import 'antd/dist/antd.less'
import SiderMenu from '../components/SiderMenu'
import TodoContainer from '../components/TodoContainer'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'curPage': 1
    };
    this.handle = this.handle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handle() {
    fetch_movie();
  }

  onChange(page) {
    console.log(page);
    this.setState({
      'curPage': page
    });
    fetch_movie({
      'start': page,
      'count': 5
    });
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
          <Pagination
            current={this.state.curPage}
            onChange={this.onChange}
            total={50}
          />
        </Content>
      </Layout>
    )
  }
}
