import React from 'react'
import {Link, IndexLink} from 'react-router'
import {Layout, Row, Col} from 'antd'
import Login from './Login/Login'

const {Header} = Layout

const Head = () => {
  return (
    <Header className='wrap'>
      <Row>
        <Col span={6}>
          <a href='/' className='logo'/>
        </Col>
        <Col span={12} offset={2}>
          <ul className='header_tab'>
            <li><IndexLink to='/' activeClassName='header_curPage'>首页</IndexLink></li>
            <li><Link to='/movie' activeClassName='header_curPage'>电影</Link></li>
            <li><Link to='/spot' activeClassName='header_curPage'>热点</Link></li>
            <li><Link to='/music' activeClassName='header_curPage'>音乐</Link></li>
            <li><Link to='/book' activeClassName='header_curPage'>书籍</Link></li>
          </ul>
        </Col>
        <Col span={4}>
          <Login />
        </Col>
      </Row>
    </Header>
  )
}

export default Head
