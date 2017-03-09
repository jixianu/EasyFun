import React, {Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
import {Layout} from 'antd'
import 'antd/dist/antd.less'
const {Content, Sider} = Layout
import SiderMenu from '../components/SiderMenu'
import TodoContainer from '../components/TodoContainer'

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handle = this.handle.bind(this);
  }

  handle() {
    fetchJsonp('https://api.douban.com/v2/book/1220562')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
      console.log('parsed json', json.id)
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return (
      <Layout>
        <Sider>
          <SiderMenu />
        </Sider>
        <Content>
          {/*<button onClick={()=> {
           this.handle()
           }}>aaa
           </button>*/}
          <TodoContainer />

        </Content>
      </Layout>
    )
  }
}
