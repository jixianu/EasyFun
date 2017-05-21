import React, {Component} from 'react'
import {Carousel, Card, BackTop, Icon} from 'antd'
import MovieColumn from '../components/Movie/MovieColumn'
import SpotColumn from '../components/Spot/SpotColumn'
import MusicColumn from '../components/Music/MusicColumn'
import BookColumn from '../components/Book/BookColumn'

export default class HomeContainer extends Component {
  render() {
    return (
      <Card className='home'>
        <div className='carousel'>
          <Carousel autoplay>
            <div><img src={require("../image/movie_carousel_1.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_2.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_3.jpg")}/></div>
            <div><img src={require("../image/movie_carousel_4.jpg")}/></div>
          </Carousel>
        </div>
        <MovieColumn
          id='hotShowing'
          title='热门电影'
          type='in_theaters'
          total={8}
          noHead={true}
          count={5}
        />
        <SpotColumn/>
        <MusicColumn />
        <BookColumn />
        <BackTop>
          <div className="ant-back-top-inner">
            <Icon type="arrow-up"/>
          </div>
        </BackTop>
      </Card>
    )
  }
}
