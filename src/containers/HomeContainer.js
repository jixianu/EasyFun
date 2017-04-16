import React, {Component} from 'react'
import {Layout, Carousel, Button, Row, Col, Card} from 'antd'
import ColumnHeader from '../components/ColumnHeader'
import MovieColumn from '../components/Movie/MovieColumn'
import {comments} from '../common/mock'
import {fetch_movieDetail, fetch_test} from '../common/fetch'
import SpotNews from '../components/Spot/SpotNews'

import '../style/Home'
import '../style/Movie'

const {Content, Sider} = Layout

export default class HomeContainer extends Component {
  state = {}

  render() {
    return (
      <Card className='home movie_home'>
        <ColumnHeader
          title='电影栏目'
          isMore={true}
          id='movie'
          target='/movie'
        />
        {/*<div className='carousel'>
          <Carousel autoplay>
            <div><img src="http://img5.mtime.cn/mg/2017/04/12/084705.35310921.jpg"/></div>
            <div><img src="http://img5.mtime.cn/mg/2017/04/16/072713.93270227.jpg"/></div>
            <div><img src="http://img5.mtime.cn/mg/2017/04/13/093459.54877672.jpg"/></div>
            <div><img src="http://img5.mtime.cn/mg/2017/04/14/085243.95232267.jpg"/></div>
          </Carousel>
        </div>
        <MovieColumn
          id='hotShowing'
          title='正在热映'
          type='in_theaters'
          total={8}
          noPage={true}
          noHead={true}
          count={5}
        />*/}
        <ColumnHeader
          title='热点新闻'
          isMore={true}
          id='spot'
          target='/spot'
        />
        <SpotNews
        />
        <ColumnHeader
          title='流行音乐'
          isMore={true}
          id='mosic'
          target='/music'
        />
        <ColumnHeader
          title='热门图书'
          isMore={true}
          id='book'
          target='/book'
        />
      </Card>
    )
  }
}
