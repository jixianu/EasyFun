import React, {Component} from 'react'
import {Layout, Carousel, Button, Row, Col, Card} from 'antd'
import ColumnHeader from '../components/ColumnHeader'
import MovieColumn from '../components/Movie/MovieColumn'
import SpotNews from '../components/Spot/SpotNews'
import MusicColumn from '../components/Music/MusicColumn'
import BookColumn from '../components/Book/BookColumn'

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
            <div><img src={require("../image/movie_carousel_1.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_2.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_3.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_4.jpg")}/></div>
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
        {/*<SpotNews/>*/}
        <ColumnHeader
          title='流行音乐'
          isMore={true}
          id='mosic'
          target='/music'
        />
        {/*<MusicColumn />*/}
        <ColumnHeader
          title='热门图书'
          isMore={true}
          id='book'
          target='/book'
        />
        <BookColumn />
      </Card>
    )
  }
}
