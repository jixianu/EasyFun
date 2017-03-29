import React, { Component } from 'react'
import {Layout, Pagination, Row, Col, Icon} from 'antd'
import MovieMenu from '../components/MovieMenu'
import MovieList from '../components/MovieList'
import Column from '../components/MovieColumn'
import * as config from '../config'

import fetch_movie from '../common/fetch'

import 'antd/dist/antd.less'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      curPage: 1,
      isLoading : true,
      resolve: null,
      MoviesSubjects: null
    };
    this.resolve = this.resolve.bind(this);*/
  }
  /*componentWillMount() {
    fetch_movie({
      start: config.DEFAULT_START,
      count: config.DEFAULT_COUNT,
      resolve: this.resolve
    });
  }

  resolve(json){
    this.setState({
      MoviesSubjects: json.subjects,
      isLoading: false
    })
  }*/

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
