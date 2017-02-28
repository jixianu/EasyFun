import React, { Component } from 'react'
import Layout from 'antd/lib/layout'
import {Link, IndexLink} from 'react-router'

import 'antd/dist/antd.less'
import '../style/App'
const { Header, Footer } = Layout

export default class AppContainer extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Header>
              <ul className='header_tab'>
                <li><IndexLink to="/" activeClassName='header_curPage'>home</IndexLink></li>
                <li><Link to="/book" activeClassName='header_curPage'>book</Link></li>
                <li><Link to="/music" activeClassName='header_curPage'>music</Link></li>
                <li><Link to="/movie" activeClassName='header_curPage'>movie</Link></li>
                <li><Link to="/sport" activeClassName='header_curPage'>sport</Link></li>
              </ul>
            </Header>
          </Layout>
          <div>
              {this.props.children}
          </div>
          <Layout>
            <Footer>Footer</Footer>
          </Layout>
      </div>
    )
  }
}
